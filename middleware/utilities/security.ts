// Deno -%- ////
import { crypto } from "https://deno.land/std@0.115.0/crypto/mod.ts";
import {
  create,
  verify,
  getNumericDate,
  Payload,
  Header,
} from "https://deno.land/x/djwt@v2.4/mod.ts";

// Packages -%- ////
import CryptoJS from "npm:crypto-js@4.1.1";

// Types -%- ////
import { Context } from "https://deno.land/x/oak/mod.ts";

// Components -%- ////

// Middleware & Integrations -%- ////
const authenticateUsername = async (username: string) => {
  try {
    if (username === (await Deno.env.get("MIDDLEWARE_USERNAME"))) {
      return true;
    }
  } catch (error) {
    console.log("Error authenticating username (Middleware)");
  }
};
const authenticatePassword = async (password: string) => {
  try {
    if (password === (await Deno.env.get("MIDDLEWARE_PASSWORD"))) {
      return true;
    }
  } catch (error) {
    console.log("Error authenticating password (Middleware)");
  }
};
export const decrypt = async (data: object) => {
  try {
    const bytes = await CryptoJS.AES.decrypt(
      data,
      await Deno.env.get("SECRET")
    );
    return await JSON.parse(await bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.log("Error decrypting (Middleware)");
  }
};

// Application -%- ////
export const authentication = async (ctx: Context) => {
  try {
    const req = ctx.request.body({ type: "json" });
    const { credentials } = await req?.value;
    const { username, password } = await decrypt(credentials);
    const encoder = new TextEncoder();
    const keyBuf = encoder?.encode(await Deno.env.get("SECRET"));
    const user = await authenticateUsername(username);
    const pass = await authenticatePassword(password);
    if (user && pass) {
      const payload: Payload = {
        iss: await Deno.env.get("MIDDLEWARE_URL"),
        exp: getNumericDate(300),
      };
      const header: Header = {
        alg: "HS256",
        typ: "JWT",
      };
      const key = await crypto.subtle.importKey(
        "raw",
        keyBuf,
        { name: "HMAC", hash: "SHA-256" },
        true,
        ["sign", "verify"]
      );
      const jwt = await create(header, payload, key);
      return { jwt: await jwt };
    }
  } catch (error) {
    console.log("Error authenticating request (Middleware)");
    return;
  }
};
export const authorization = async (ctx: Context) => {
  try {
    const encoder = new TextEncoder();
    const keyBuf = encoder?.encode(`${Deno.env.get("SECRET")}`);
    const headers: Headers = ctx?.request?.headers;
    const authorization = headers?.get("Authorization");
    const jwt = authorization?.split(" ")[1];
    const key = await crypto?.subtle?.importKey(
      "raw",
      keyBuf,
      { name: "HMAC", hash: "SHA-256" },
      true,
      ["sign", "verify"]
    );
    const payload = await verify(jwt, key);
    if (authorization && jwt && payload) {
      return true;
    }
  } catch (error) {
    console.log("Error authorizing request (Middleware)");
    return;
  }
};

// System -%- ////

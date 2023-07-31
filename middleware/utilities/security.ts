// Deno -%- ////

// Packages -%- ////
import {
  create,
  verify,
  getNumericDate,
  Payload,
  Header,
} from "https://deno.land/x/djwt@v2.4/mod.ts";

// Types -%- ////
import { Context } from "https://deno.land/x/oak/mod.ts";

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////
const authenticateUsername = async (username: string) => {
  const frontendUser = username;
  const middlewareUser = `${Deno.env.get("MIDDLEWARE_USERNAME")}`;
  if (frontendUser === middlewareUser) {
    return true;
  }
};
const authenticatePassword = async (password: string) => {
  const frontendPassword = password;
  const middlewarePassword = `${Deno.env.get("MIDDLEWARE_PASSWORD")}`;
  if (frontendPassword === middlewarePassword) {
    return true;
  }
};
export const authentication = async (ctx: Context) => {
  try {
    const req = ctx.request.body({ type: "json" });
    const { username, password } = await req?.value;
    if (username && password) {
      const encoder = new TextEncoder();
      const keyBuf = encoder?.encode(`${Deno.env.get("SECRET")}`);
      const user = await authenticateUsername(username);
      const pass = await authenticatePassword(password);
      if (user && pass) {
        const payload: Payload = {
          iss: `${Deno.env.get("MIDDLEWARE_URL")}`,
          exp: getNumericDate(300), // expires in 5 min.
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
        console.log("key", key);
        const jwt = await create(header, payload, key);
        return { jwt: await jwt };
      }
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

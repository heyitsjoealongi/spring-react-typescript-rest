// Deno -%- ////
import { Router } from "https://deno.land/x/oak/mod.ts";
export const securityRouter = new Router();

// Packages -%- ////

// Types -%- ////
import { Context } from "https://deno.land/x/oak/mod.ts";

// Components -%- ////

// Middleware & Integrations -%- ////
import { authentication } from "../utilities/security.ts";

// Application -%- ////
securityRouter.post("/authenticate", async (ctx: Context) => {
  ctx.response.body = await authentication(ctx);
  return;
});

// System -%- ////

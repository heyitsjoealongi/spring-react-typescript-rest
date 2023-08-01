// Deno -%- ////
import { Router } from "https://deno.land/x/oak/mod.ts";
export const analyticsRouter = new Router();

// Packages -%- ////

// Types -%- ////
import { Context } from "https://deno.land/x/oak/mod.ts";

// Components -%- ////

// Middleware & Integrations -%- ////
import { authorization } from "../utilities/security.ts";
import { getAnalytics, saveAnalytic } from "../apis/analytics.ts";

// Application -%- ////
analyticsRouter.get("/all", async (ctx: Context) => {
  const auth = await authorization(ctx);
  if (auth) {
    ctx.response.body = await getAnalytics();
  }
  return;
});
analyticsRouter.get("/add", async (ctx: Context) => {
  const auth = await authorization(ctx);
  if (auth) {
    const analytic: Analytic = await ctx?.request?.body;
    ctx.response.body = await saveAnalytic(analytic);
  }
  return;
});

// System -%- ////

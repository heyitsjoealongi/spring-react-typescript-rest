// Deno -%- ////
import { Router } from "https://deno.land/x/oak/mod.ts";
export const analyticsRouter = new Router();

// Packages -%- ////

// Types -%- ////
import { Context } from "https://deno.land/x/oak/mod.ts";
import { AnalyticNewT } from "../types/analytic.ts";

// Components -%- ////

// Middleware & Integrations -%- ////
import { authorization } from "../utilities/security.ts";
import { getAnalytics, saveAnalytic } from "../apis/analytics.ts";

// Application -%- ////
analyticsRouter.get("/all", async (ctx: Context) => {
  try {
    const auth = await authorization(ctx);
    if (auth) {
      ctx.response.body = await getAnalytics();
    }
    return;
  } catch (error) {
    console.log("Error @ /analytics/all endpoint (Middleware)");
    return;
  }
});
analyticsRouter.post("/add", async (ctx: Context) => {
  try {
    const auth = await authorization(ctx);
    if (auth) {
      const analytic: AnalyticNewT = await ctx?.request?.body({
        type: "json",
      })?.value;
      ctx.response.body = await saveAnalytic(analytic);
    }
    return;
  } catch (error) {
    console.log("Error @ /analytics/add endpoint (Middleware)");
    return;
  }
});

// System -%- ////

import { Router } from "https://deno.land/x/oak/mod.ts";

export const analyticsRouter = new Router();

import { getAnalytics, saveAnalytic } from "../apis/analytics.ts";

analyticsRouter.get("/all", async (ctx) => {
  const all = await getAnalytics();
  ctx.response.body = await all;
});

analyticsRouter.get("/add", async (ctx) => {
  const analytic: Analytic = await ctx?.request?.body;
  const add = await saveAnalytic(analytic);
  ctx.response.body = await add;
});

// Deno -%- ////
import { Router } from "https://deno.land/x/oak/mod.ts";
export const articlesRouter = new Router();

// Packages -%- ////

// Types -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import { getArticles, getTopics } from "../apis/articles.ts";

// Application -%- ////
articlesRouter.get("/all", async (ctx) => {
  const all = await getArticles();
  ctx.response.body = await all;
});
articlesRouter.get("/topics", async (ctx) => {
  const all = await getTopics();
  ctx.response.body = await all;
});

// System -%- ////

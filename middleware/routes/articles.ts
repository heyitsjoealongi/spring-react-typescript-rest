import { Router } from "https://deno.land/x/oak/mod.ts";

export const articlesRouter = new Router();

import { getArticles, getTopics } from "../apis/articles.ts";

articlesRouter.get("/all", async (ctx) => {
  const all = await getArticles();
  ctx.response.body = await all;
});

articlesRouter.get("/topics", async (ctx) => {
  const all = await getTopics();
  ctx.response.body = await all;
});

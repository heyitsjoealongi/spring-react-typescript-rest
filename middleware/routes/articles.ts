// Deno -%- ////
import { Router } from "https://deno.land/x/oak/mod.ts";
export const articlesRouter = new Router();

// Packages -%- ////

// Types -%- ////
import { Context } from "https://deno.land/x/oak/mod.ts";

// Components -%- ////

// Middleware & Integrations -%- ////
import { authorization } from "../utilities/security.ts";
import { getArticles, getTopics } from "../apis/articles.ts";

// Application -%- ////
articlesRouter.get("/all", async (ctx: Context) => {
  const auth = await authorization(ctx);
  if (auth) {
    ctx.response.body = await getArticles();
  }
  return;
});
articlesRouter.get("/topics", async (ctx: Context) => {
  const auth = await authorization(ctx);
  if (auth) {
    ctx.response.body = await getTopics();
  }
  return;
});

// System -%- ////

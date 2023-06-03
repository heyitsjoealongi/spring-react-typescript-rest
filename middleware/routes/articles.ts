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
  try {
    const auth = await authorization(ctx);
    if (auth) {
      ctx.response.body = await getArticles();
    }
    return;
  } catch (error) {
    console.log("Error @ /articles/all endpoint (Middleware)");
    return;
  }
});
articlesRouter.get("/topics", async (ctx: Context) => {
  try {
    const auth = await authorization(ctx);
    if (auth) {
      ctx.response.body = await getTopics();
    }
    return;
  } catch (error) {
    console.log("Error @ /articles/topics endpoint (Middleware)");
    return;
  }
});

// System -%- ////

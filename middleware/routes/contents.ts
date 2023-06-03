// Deno -%- ////
import { Router } from "https://deno.land/x/oak/mod.ts";
export const contentsRouter = new Router();

// Packages -%- ////

// Types -%- ////
import { Context } from "https://deno.land/x/oak/mod.ts";

// Components -%- ////

// Middleware & Integrations -%- ////
import { authorization } from "../utilities/security.ts";
import { getContentsSearch } from "../apis/content.ts";

// Application -%- ////
contentsRouter.get("/search", async (ctx: Context) => {
  try {
    const auth = await authorization(ctx);
    if (auth) {
      const slug = await ctx.request.url.searchParams.get("article_slug");
      console.log("slug", slug);
      ctx.response.body = await getContentsSearch(slug);
    }
    return;
  } catch (error) {
    console.log("Error @ /contents/search endpoint (Middleware)");
    return;
  }
});

// System -%- ////

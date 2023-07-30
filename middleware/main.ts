// Deno -%- ////
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

// Packages -%- ////

// Types -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import { SpringReactTypeScriptRESTRouter } from "./routes/spring-react-typescript-rest.ts";
import { analyticsRouter } from "./routes/analytics.ts";
import { articlesRouter } from "./routes/articles.ts";

// Application -%- ////
const app = new Application();
const router = new Router();
app.use(async (ctx, next) => {
  ctx.response.headers.set(
    "Access-Control-Allow-Origin",
    Deno.env.get("ALLOWED_ORIGIN")
  );
  ctx.response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS"
  );
  ctx.response.headers.set("Access-Control-Max-Age", "3600");
  ctx.response.headers.set("Access-Control-Allow-Headers", "*");
  await next();
});
app.use(router.routes());
app.use(router.allowedMethods());
router.use("/", SpringReactTypeScriptRESTRouter.routes());
router.use("/analytics", analyticsRouter.routes());
router.use("/articles", articlesRouter.routes());

// System -%- ////
app.addEventListener("listen", () => {
  console.log(
    `Listening on: http://localhost:${parseInt(Deno.env.get("PORT"))}`
  );
});
await app.listen({ port: parseInt(Deno.env.get("PORT")) });

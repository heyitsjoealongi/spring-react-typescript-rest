// Deno -%- ////
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

// Packages -%- ////

// Types -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import { SpringReactTypeScriptRESTRouter } from "./routes/spring-react-typescript-rest.ts";
import { articlesRouter } from "./routes/articles.ts";
import { contentsRouter } from "./routes/contents.ts";
import { analyticsRouter } from "./routes/analytics.ts";
import { securityRouter } from "./routes/security.ts";

// Application -%- ////
const app = new Application();
const router = new Router();
const port = await Deno.env.get("PORT");
app.use(
  oakCors({
    origin: await Deno.env.get("ALLOWED_ORIGIN"),
    methods: "GET, POST, OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
);
app.use(async (ctx, next) => {
  ctx.response.headers.set(
    "Access-Control-Allow-Origin",
    await Deno.env.get("ALLOWED_ORIGIN")
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
router.use("/articles", articlesRouter.routes());
router.use("/contents", contentsRouter.routes());
router.use("/analytics", analyticsRouter.routes());
router.use("/security", securityRouter.routes());
app.addEventListener("listen", () => {
  console.log(`Listening on: http://localhost:${port}`);
});
await app.listen({ port: port });

// System -%- ////

// Deno -%- ////
import { Router } from "https://deno.land/x/oak/mod.ts";
export const SpringReactTypeScriptRESTRouter = new Router();

// Packages -%- ////

// Types -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////
const SpringReactTypeScriptREST = `<head><meta name="robots" content="noindex, nofollow" /><meta name="googlebot" content="noindex, nofollow" /><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Overpass:wght@700&display=swap" rel="stylesheet"></head><body style="overflow:hidden;background-color:#F4F5F5;"><p style="overflow:hidden;text-align:center;width:100%;margin:50vh auto;color:#878C8F;font-family: 'Space Mono', monospace;font-size:18px;line-height:125%;">Spring React TypeScript REST</p></body>`;
SpringReactTypeScriptRESTRouter.get("/", (ctx) => {
  ctx.response.body = SpringReactTypeScriptREST;
  ctx.response.headers.set("Content-Type", "text/html");
});

// System -%- ////

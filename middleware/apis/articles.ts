// Deno -%- ////
import axiod from "https://deno.land/x/axiod/mod.ts";

// Packages -%- ////

// Types -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import { normalizeArticles, normalizeTopics } from "../functions/articles.ts";

// Application -%- ////
export const getArticles = async () => {
  try {
    const base = await Deno.env.get("BACKEND_URL");
    const endpoint = await Deno.env.get("ARTICLE_LIST_ENDPOINT");
    const bearer = window.btoa(
      (await Deno.env.get("BACKEND_USERNAME")) +
        ":" +
        (await Deno.env.get("BACKEND_PASSWORD"))
    );
    const { data } = await axiod.get(base + endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + `${bearer}`,
      },
    });
    const articles = await normalizeArticles(data);
    return articles;
  } catch (error) {
    console.log("Error requesting articles (Middleware)");
    return;
  }
};
export const getTopics = async () => {
  try {
    const base = await Deno.env.get("BACKEND_URL");
    const endpoint = await Deno.env.get("TOPIC_LIST_ENDPOINT");
    const bearer = window.btoa(
      (await Deno.env.get("BACKEND_USERNAME")) +
        ":" +
        (await Deno.env.get("BACKEND_PASSWORD"))
    );
    const { data } = await axiod.get(base + endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + `${bearer}`,
      },
    });
    const topics = await normalizeTopics(data);
    return topics;
  } catch (error) {
    console.log("Error requesting topics (Middleware)");
    return;
  }
};

// System -%- ////

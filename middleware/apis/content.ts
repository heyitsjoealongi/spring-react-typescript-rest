// Deno -%- ////
import axiod from "https://deno.land/x/axiod/mod.ts";

// Packages -%- ////

// Types -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import { normalizeSearches } from "../functions/content.ts";

// Application -%- ////
export const getContentsSearch = async (slug: string) => {
  try {
    const base = await Deno.env.get("BACKEND_URL");
    const endpoint = await Deno.env.get("CONTENTS_SEARCH_ENDPOINT");
    const parameter = await Deno.env.get("CONTENTS_SEARCH_PARAMETER");
    const query = "?" + parameter + "=" + slug;
    const bearer = window.btoa(
      (await Deno.env.get("BACKEND_USERNAME")) +
        ":" +
        (await Deno.env.get("BACKEND_PASSWORD"))
    );
    const { data } = await axiod.get(base + endpoint + query, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + `${bearer}`,
      },
    });
    const searches = await normalizeSearches(data);
    return searches;
  } catch (error) {
    console.log("Error requesting searches (Middleware)", error);
    return;
  }
};

// System -%- ////

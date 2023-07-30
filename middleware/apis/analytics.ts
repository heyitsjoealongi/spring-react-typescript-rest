// Deno -%- ////
import axiod from "https://deno.land/x/axiod/mod.ts";

// Packages -%- ////

// Types -%- ////
import Analytic from "../types/Analytic.ts";

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////
export const getAnalytics = async () => {
  try {
    const base = await Deno.env.get("BACKEND_URL");
    const endpoint = await Deno.env.get("ANALYTICS_LIST_ENDPOINT");
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
    return data;
  } catch (error) {
    console.log("Error requesting analytics (Middleware)");
  }
};
export const saveAnalytic = async (analytic: Analytic) => {
  try {
    const base = await Deno.env.get("BACKEND_URL");
    const endpoint = await Deno.env.get("ANALYTICS_ADD_ENDPOINT");
    const bearer = window.btoa(
      (await Deno.env.get("BACKEND_USERNAME")) +
        ":" +
        (await Deno.env.get("BACKEND_PASSWORD"))
    );
    const { data } = await axiod.post(base + endpoint, analytic, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + `${bearer}`,
      },
    });
    return data;
  } catch (error) {
    console.log("Error saving analytic (Middleware)");
  }
};

// System -%- ////

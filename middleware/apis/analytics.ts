// Deno -%- ////
import axiod from "https://deno.land/x/axiod/mod.ts";

// Packages -%- ////

// Types -%- ////
import { AnalyticNewT } from "../types/analytic.ts";

// Components -%- ////

// Middleware & Integrations -%- ////
import {
  normalizeAnalytics,
  structureAnalytic,
} from "../functions/analytics.ts";

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
    const analytics = await normalizeAnalytics(data);
    return analytics;
  } catch (error) {
    console.log("Error requesting analytics (Middleware)");
    return;
  }
};
export const saveAnalytic = async (analytic: AnalyticNewT) => {
  try {
    const base = await Deno.env.get("BACKEND_URL");
    const endpoint = await Deno.env.get("ANALYTICS_ADD_ENDPOINT");
    const bearer = window.btoa(
      (await Deno.env.get("BACKEND_USERNAME")) +
        ":" +
        (await Deno.env.get("BACKEND_PASSWORD"))
    );
    const analyticStructured = await structureAnalytic(analytic);
    const { data } = await axiod.post(base + endpoint, analyticStructured, {
      headers: {
        Authorization: "Basic " + `${bearer}`,
      },
    });
    return data;
  } catch (error) {
    console.log("Error saving analytic (Middleware)", error);
    return;
  }
};

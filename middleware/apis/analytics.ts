import axiod from "https://deno.land/x/axiod/mod.ts";

import Analytic from "../types/Analytic.ts";

export const getAnalytics = async () => {
  try {
    const base = await Deno.env.get("BACKEND_URL");
    const endpoint = await Deno.env.get("ANALYTICS_LIST_ENDPOINT");
    const backendUsername = await Deno.env.get("BACKEND_USERNAME");
    const backendPassword = await Deno.env.get("BACKEND_PASSWORD");
    const bearer = window.btoa(backendUsername + ":" + backendPassword);
    const { data } = await axiod.get(base + endpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + `${bearer}`,
      },
    });
    return data;
  } catch (error) {
    console.log(`getAnalytics: ${error}`);
    return error;
  }
};

export const saveAnalytic = async (analytic: Analytic) => {
  try {
    const base = await Deno.env.get("BACKEND_URL");
    const endpoint = await Deno.env.get("ANALYTICS_ADD_ENDPOINT");
    const backendUsername = await Deno.env.get("BACKEND_USERNAME");
    const backendPassword = await Deno.env.get("BACKEND_PASSWORD");
    const bearer = window.btoa(backendUsername + ":" + backendPassword);
    const { data } = await axiod.post(base + endpoint, analytic, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + `${bearer}`,
      },
    });
    return data;
  } catch (error) {
    console.log(`saveAnalytic: ${error}`);
    return error;
  }
};

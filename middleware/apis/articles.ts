import axiod from "https://deno.land/x/axiod/mod.ts";

export const getArticles = async () => {
  try {
    const base = await Deno.env.get("BACKEND_URL");
    const endpoint = await Deno.env.get("ARTICLE_LIST_ENDPOINT");
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
    console.log(`getArticles: ${error}`);
    return error;
  }
};

export const getTopics = async () => {
  try {
    const base = await Deno.env.get("BACKEND_URL");
    const endpoint = await Deno.env.get("TOPIC_LIST_ENDPOINT");
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
    console.log(`getTopics: ${error}`);
    return error;
  }
};

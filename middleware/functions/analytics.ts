// Deno -%- ////

// Packages -%- ////
import dayjs from "npm:dayjs@latest";
import Bowser from "npm:bowser@latest";

// Types -%- ////
import {
  AnalyticsT,
  AnalyticsNormalizedT,
  AnalyticNormalizedT,
  AnalyticNewT,
  AnalyticT,
  AnalyticPageT,
  AnalyticDateT,
} from "../types/analytic.ts";

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////
const page = async (analyticUrl: string) => {
  const clean: AnalyticPageT = { page: "" };
  clean.page = analyticUrl?.toString();
  clean.page = clean?.page?.replace("http://", "");
  clean.page = clean?.page?.replace("https://", "");
  clean.page = clean?.page?.replace("www.", "");
  clean.page = clean?.page?.replace(
    await Deno.env.get("ALLOWED_ORIGIN_BASE"),
    ""
  );
  clean.page = clean?.page?.replace(
    await Deno.env.get("ANALYTICS_DYNAMIC_ENDPOINT"),
    "/"
  );
  return clean?.page;
};
const date = async (analyticTimestamp: string) => {
  const clean: AnalyticDateT = { date: "" };
  clean.date = dayjs(analyticTimestamp)?.format("MM/DD/YYYY");
  return clean?.date;
};
const browser = async (analyticUserAgent: string) => {
  const browser = await Bowser.getParser(analyticUserAgent.toString());
  return await browser.getBrowserName();
};
export const normalizeAnalytics = async (data: AnalyticsT) => {
  try {
    const analytics: AnalyticsNormalizedT = [];
    data.forEach(
      async ({
        analyticId,
        analyticUrl,
        analyticTimestamp,
        analyticLanguage,
        analyticUserAgent,
        analyticGeoLocation,
      }) => {
        const analytic: AnalyticNormalizedT = {
          analytic_id: analyticId,
          analytic_page: await page(analyticUrl),
          analytic_date: await date(analyticTimestamp),
          analytic_language: analyticLanguage,
          analytic_useragent: await browser(analyticUserAgent),
          analytic_geolocation: analyticGeoLocation,
        };
        analytics.push(analytic);
      }
    );
    return analytics;
  } catch (error) {
    console.log("Error normalizing analytics (Middleware)");
    return;
  }
};
export const structureAnalytic = async (data: AnalyticNewT) => {
  try {
    const {
      analytic_url,
      analytic_timestamp,
      analytic_language,
      analytic_useragent,
      analytic_geolocation,
    }: AnalyticNewT = data;
    const analytic: AnalyticT = {
      analyticUrl: analytic_url,
      analyticTimestamp: analytic_timestamp,
      analyticLanguage: analytic_language,
      analyticUserAgent: analytic_useragent,
      analyticGeoLocation: JSON.stringify(analytic_geolocation),
    };
    return analytic;
  } catch (error) {
    console.log("Error normalizing analytic (Middleware)");
    return;
  }
};

// System -%- ////

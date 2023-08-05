// Deno -%- ////

// Packages -%- ////

// Types -%- ////
import {
  Analytics,
  AnalyticsNormalized,
  AnalyticNormalized,
  AnalyticFresh,
  Analytic,
} from "../types/analytic.ts";

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////
export const normalizeAnalytics = async (data: Analytics) => {
  try {
    const analytics: AnalyticsNormalized = [];
    data.forEach(
      ({
        analyticId,
        analyticUrl,
        analyticTimestamp,
        analyticLanguage,
        analyticUserAgent,
        analyticGeoLocation,
      }) => {
        const analytic: AnalyticNormalized = {
          analytic_id: analyticId,
          analytic_url: analyticUrl,
          analytic_timestamp: analyticTimestamp,
          analytic_language: analyticLanguage,
          analytic_useragent: analyticUserAgent,
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
export const structureAnalytic = async (data: AnalyticFresh) => {
  try {
    const {
      analytic_url,
      analytic_timestamp,
      analytic_language,
      analytic_useragent,
      analytic_geolocation,
    }: AnalyticFresh = data;
    const analytic: Analytic = {
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

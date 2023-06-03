// Deno -%- ////

// Packages -%- ////

// Types -%- ////
export type AnalyticNewT = {
  analytic_url: string;
  analytic_timestamp: string;
  analytic_language: string;
  analytic_useragent: string;
  analytic_geolocation: string;
};
export type AnalyticsT = {
  analyticId: number;
  analyticUrl: string;
  analyticTimestamp: string;
  analyticLanguage: string;
  analyticUserAgent: string;
  analyticGeoLocation: string;
}[];
export type AnalyticT = {
  analyticUrl: string;
  analyticTimestamp: string;
  analyticLanguage: string;
  analyticUserAgent: string;
  analyticGeoLocation: string;
};
export type AnalyticNormalizedT = {
  analytic_id: number;
  analytic_page: string;
  analytic_date: string;
  analytic_language: string;
  analytic_useragent: string;
  analytic_geolocation: string;
};
export type AnalyticsNormalizedT = {
  analytic_id: number;
  analytic_page: string;
  analytic_date: string;
  analytic_language: string;
  analytic_useragent: string;
  analytic_geolocation: string;
}[];
export type AnalyticPageT = {
  page: string;
};
export type AnalyticDateT = {
  date: string;
};

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////

// System -%- ////

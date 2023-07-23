// React -%- ////

// Packages -%- ////

// MUI -%- ////

// System Components -%- ////

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////
import {
    getURL,
    getTimestamp,
    getUserAgent,
    getLanguage,
    getGeoLocation,
} from '../../functions/analytics'

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function AnalyticsUtilityComponent() {
    const url = getURL()
    const timestamp = getTimestamp()
    const useragent = getUserAgent()
    const language = getLanguage()
    const geolocation = getGeoLocation()
    return { url, timestamp, useragent, language, geolocation }
}

// System -%- ////

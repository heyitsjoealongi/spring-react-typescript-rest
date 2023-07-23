// React -%- ////
import * as React from 'react'

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
    console.log('----url', url)
    console.log('----timestamp', timestamp)
    console.log('----userAgent', useragent)
    console.log('----language', language)
    console.log('----geolocation', geolocation)
    return <React.Fragment></React.Fragment>
}

// System -%- ////

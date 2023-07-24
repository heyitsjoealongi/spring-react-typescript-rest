// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import {
    getURL,
    getTimestamp,
    getUserAgent,
    getLanguage,
    getGeoLocation,
    saveAnalytic,
} from '../../functions/analytics'

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function AnalyticUtilityComponent() {
    const url = getURL()
    const timestamp = getTimestamp()
    const useragent = getUserAgent()
    const language = getLanguage()
    const geolocation = getGeoLocation()

    // State Refresher Hook
    React.useEffect(() => {
        saveAnalytic({
            url,
            timestamp,
            useragent,
            language,
            geolocation,
        })
        return () => {
            true
        }
    }, [])

    return <React.Fragment></React.Fragment>
}

// System -%- ////

// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////
import Box from '@mui/material/Box'

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

    return (
        <Box
            sx={{
                visibility: 'hidden !important',
                height: '0 !important',
                width: '0 !important',
                margin: '0 !important',
                padding: '0 !important',
            }}
        ></Box>
    )
}

// System -%- ////

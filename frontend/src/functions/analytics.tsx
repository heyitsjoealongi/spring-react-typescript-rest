// React -%- ////

// Packages -%- ////
import axios from 'axios'
import dayjs from 'dayjs'

// Types -%- ////
import { PositionT, CoordinateT } from '../types/analytic'

// Types -%- ////

// MUI -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import { authorize } from './security'
export const getAnalytics = async () => {
    try {
        const auth = await authorize()
        if (auth) {
            const base = process.env.REACT_APP_MIDDLEWARE_URL
            const endpoint = process.env.REACT_APP_ANALYTICS_LIST_ENDPOINT
            const { data } = await axios.get(base + endpoint, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth}`,
                },
            })
            return data
        }
    } catch (error) {
        console.log('Error requesting analytics (Frontend)')
    }
}
export const saveAnalytic = async () => {
    try {
        const auth = await authorize()
        if (auth) {
            const analytic_url = getURL()
            const analytic_timestamp = getTimestamp()
            const analytic_useragent = getUserAgent()
            const analytic_language = getLanguage()
            const analytic_geolocation = getGeoLocation()
            const base = process.env.REACT_APP_MIDDLEWARE_URL
            const endpoint = process.env.REACT_APP_ANALYTICS_ADD_ENDPOINT
            const { data } = await axios.post(
                base + endpoint,
                {
                    analytic_url,
                    analytic_timestamp,
                    analytic_useragent,
                    analytic_language,
                    analytic_geolocation,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${auth}`,
                    },
                }
            )
            return data
        }
    } catch (error) {
        console.log('Error saving analytic (Frontend)')
    }
}
export const getURL = () => {
    return window?.location?.href
}
export const getTimestamp = () => {
    return dayjs()?.toISOString()
}
export const getUserAgent = () => {
    return navigator?.userAgent
}
export const getLanguage = () => {
    return navigator?.language
}
export const getGeoLocation = () => {
    const geo: CoordinateT = {
        accuracy: 0,
        altitude: 0,
        altitudeAccuracy: 0,
        heading: 0,
        latitude: 0,
        longitude: 0,
        speed: 0,
    }
    function success(pos: PositionT) {
        const coords: any = pos?.['coords']
        const {
            accuracy,
            altitude,
            altitudeAccuracy,
            heading,
            latitude,
            longitude,
            speed,
        }: CoordinateT = coords
        geo.accuracy = accuracy
        geo.altitude = altitude
        geo.altitudeAccuracy = altitudeAccuracy
        geo.heading = heading
        geo.latitude = latitude
        geo.longitude = longitude
        geo.speed = speed
    }
    navigator.geolocation.getCurrentPosition(success, null, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    })
    return geo
}

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////

// System -%- ////

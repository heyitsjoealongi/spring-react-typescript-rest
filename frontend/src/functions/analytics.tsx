// React -%- ////

// Packages -%- ////
import axios from 'axios'
import dayjs from 'dayjs'

// MUI -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import { authorize } from './security'
export const getAnalytics = async () => {
    try {
        const auth = await authorize()
        if (auth) {
            const base = process.env.REACT_APP_SERVER_URL
            const endpoint = process.env.REACT_APP_ANALYTICS_LIST_ENDPOINT
            const { data } = await axios.get(base + endpoint, {
                headers: {
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
            const url = getURL()
            const timestamp = getTimestamp()
            const useragent = getUserAgent()
            const language = getLanguage()
            const geolocation = getGeoLocation()
            const base = process.env.REACT_APP_SERVER_URL
            const endpoint = process.env.REACT_APP_ANALYTICS_ADD_ENDPOINT
            const { data } = await axios.post(
                base + endpoint,
                {
                    url,
                    timestamp,
                    useragent,
                    language,
                    geolocation,
                },
                {
                    headers: {
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
type GeoLocation = {
    coords: object
}
interface Coordinates {
    accuracy: number
    altitude: number
    altitudeAccuracy: number
    heading: number
    latitude: number
    longitude: number
    speed: number
}
export const getGeoLocation = () => {
    const geo: Coordinates = {
        accuracy: 0,
        altitude: 0,
        altitudeAccuracy: 0,
        heading: 0,
        latitude: 0,
        longitude: 0,
        speed: 0,
    }
    function success(pos: GeoLocation) {
        const coords: any = pos?.coords
        const {
            accuracy,
            altitude,
            altitudeAccuracy,
            heading,
            latitude,
            longitude,
            speed,
        }: Coordinates = coords
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

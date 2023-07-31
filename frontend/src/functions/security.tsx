// React -%- ////

// Packages -%- ////
import axios from 'axios'

// MUI -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
export const authorize = async () => {
    try {
        const base = process.env.REACT_APP_SERVER_URL
        const endpoint = process.env.REACT_APP_AUTHORIZATION_ENDPOINT
        const username = process.env.REACT_APP_SERVER_USERNAME
        const password = process.env.REACT_APP_SERVER_PASSWORD
        const authorized = await axios.post(base + endpoint, {
            username,
            password,
        })
        return authorized?.data?.jwt
    } catch (error) {
        console.log('Error authorizing (Frontend)')
    }
}

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////

// System -%- ////

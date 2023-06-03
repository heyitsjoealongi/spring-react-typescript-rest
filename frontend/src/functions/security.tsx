// React -%- ////

// Packages -%- ////
import axios from 'axios'
import AES from 'crypto-js/aes'

// Types -%- ////

// MUI -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
export const encrypt = async (data: object) => {
    try {
        const secret = process.env.REACT_APP_MIDDLEWARE_SECRET
        return await AES.encrypt(JSON.stringify(data), secret).toString()
    } catch (error) {
        console.log('Error encrypting (Frontend)')
    }
}
export const authorize = async () => {
    try {
        const base = process.env.REACT_APP_MIDDLEWARE_URL
        const endpoint = process.env.REACT_APP_AUTHORIZATION_ENDPOINT
        const username = process.env.REACT_APP_MIDDLEWARE_USERNAME
        const password = process.env.REACT_APP_MIDDLEWARE_PASSWORD
        const credentials = await encrypt({
            username: username,
            password: password,
        })
        const authorized = await axios.post(base + endpoint, {
            credentials: credentials,
        })
        return authorized?.data?.jwt
    } catch (error) {
        console.log('Error authorizing (Frontend)')
    }
}

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////

// System -%- ////

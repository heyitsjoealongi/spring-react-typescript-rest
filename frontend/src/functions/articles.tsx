// React -%- ////

// Packages -%- ////
import axios from 'axios'

// MUI -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
export const getArticles = async () => {
    try {
        const base = process.env.REACT_APP_BACKEND_URL.toString()
        const endpoint = process.env.REACT_APP_ARTICLE_LIST_ENDPOINT.toString()
        const bearer = window.btoa(
            process.env.REACT_APP_BACKEND_USERNAME +
                ':' +
                process.env.REACT_APP_BACKEND_PASSWORD
        )
        const { data } = await axios.get(base + endpoint, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Basic ' + `${bearer}`,
            },
        })
        return data
    } catch (error) {
        console.log('error requesting articles:', error)
    }
}
export const getTopics = async () => {
    try {
        const base = process.env.REACT_APP_BACKEND_URL.toString()
        const endpoint = process.env.REACT_APP_TOPIC_LIST_ENDPOINT.toString()
        const bearer = window.btoa(
            process.env.REACT_APP_BACKEND_USERNAME +
                ':' +
                process.env.REACT_APP_BACKEND_PASSWORD
        )
        const { data } = await axios.get(base + endpoint, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Basic ' + `${bearer}`,
            },
        })
        return data
    } catch (error) {
        console.log('error requesting topics:', error)
    }
}

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////

// System -%- ////

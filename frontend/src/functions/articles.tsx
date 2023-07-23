// React -%- ////

// Packages -%- ////
import axios from 'axios'

// MUI -%- ////

// Components -%- ////

// Integrations -%- ////
export const fetchArticles = async () => {
    try {
        const base = process.env.REACT_APP_BACKEND_URL.toString()
        const endpoint = process.env.REACT_APP_ARTICLE_LIST_ENDPOINT.toString()
        const { data } = await axios.get(base + endpoint)
        return data
    } catch (error) {
        console.log('error requesting articles:', error)
    }
}
export const fetchTopics = async () => {
    try {
        const base = process.env.REACT_APP_BACKEND_URL.toString()
        const endpoint = process.env.REACT_APP_TOPIC_LIST_ENDPOINT.toString()
        const { data } = await axios.get(base + endpoint)
        return data
    } catch (error) {
        console.log('error requesting topics:', error)
    }
}

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////

// System -%- ////

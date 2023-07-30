// React -%- ////

// Packages -%- ////
import axios from 'axios'

// MUI -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
export const getArticles = async () => {
    try {
        const base = process.env.REACT_APP_SERVER_URL
        const endpoint = process.env.REACT_APP_ARTICLE_LIST_ENDPOINT
        const { data } = await axios.get(base + endpoint)
        return data
    } catch (error) {
        console.log('error requesting articles:', error)
    }
}
export const getTopics = async () => {
    try {
        const base = process.env.REACT_APP_SERVER_URL
        const endpoint = process.env.REACT_APP_TOPIC_LIST_ENDPOINT
        const { data } = await axios.get(base + endpoint)
        return data
    } catch (error) {
        console.log('error requesting topics:', error)
    }
}

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////

// System -%- ////

// React -%- ////

// Packages -%- ////
import axios from 'axios'

// Types -%- ////

// MUI -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import { authorize } from './security'
export const getArticles = async () => {
    try {
        const auth = await authorize()
        if (auth) {
            const base = process.env.REACT_APP_MIDDLEWARE_URL
            const endpoint = process.env.REACT_APP_ARTICLE_LIST_ENDPOINT
            const { data } = await axios.get(base + endpoint, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth}`,
                },
            })
            return data
        }
    } catch (error) {
        console.log('Error requesting articles (Frontend)')
    }
}
export const getTopics = async () => {
    try {
        const auth = await authorize()
        if (auth) {
            const base = process.env.REACT_APP_MIDDLEWARE_URL
            const endpoint = process.env.REACT_APP_TOPIC_LIST_ENDPOINT
            const { data } = await axios.get(base + endpoint, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth}`,
                },
            })
            return data
        }
    } catch (error) {
        console.log('Error requesting topics (Frontend)')
    }
}

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////

// System -%- ////

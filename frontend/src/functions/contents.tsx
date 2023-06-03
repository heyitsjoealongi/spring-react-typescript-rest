// React -%- ////

// Packages -%- ////
import axios from 'axios'

// Types -%- ////

// MUI -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import { authorize } from './security'
export const getContentsSearch = async (slug) => {
    try {
        const auth = await authorize()
        if (auth) {
            const base = process.env.REACT_APP_MIDDLEWARE_URL
            const endpoint = process.env.REACT_APP_CONTENTS_SEARCH_ENDPOINT
            const query = '?article_slug=' + slug
            const { data } = await axios.get(base + endpoint + query, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth}`,
                },
            })
            return data
        }
    } catch (error) {
        console.log('Error requesting searches (Frontend)')
    }
}

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////

// System -%- ////

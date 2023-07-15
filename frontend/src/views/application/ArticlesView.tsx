// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilState } from 'recoil'
import { articlesState } from '../../recoil/atoms/articlesAtom'
import axios from 'axios'

// MUI -%- ////

// System Components -%- ////

// Components -%- ////
import ArticleScapeComponent from '../../components/application/ArticleScapeComponent'

// Integrations -%- ////
async function fetchArticles() {
    try {
        const base = process.env.REACT_APP_BACKEND_URL.toString()
        const { data } = await axios.get(base + '/article/all', {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return data
    } catch (error) {
        console.log('error requesting articles:', error)
    }
}

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function ArticlesView() {
    const [articles, setArticles] = useRecoilState(articlesState)
    React.useEffect(() => {
        if (articles?.length < 1) {
            const fetch = async () => {
                const data = await fetchArticles()
                if (data) {
                    setArticles(data)
                }
            }
            fetch()
        }
        return () => {
            true
        }
    }, [articles])
    return (
        <React.Fragment>
            <ArticleScapeComponent articles={articles} />
        </React.Fragment>
    )
}

// System -%- ////

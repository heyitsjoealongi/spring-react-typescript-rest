// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilState, useRecoilValue } from 'recoil'
import { articlesState } from '../../recoil/atoms/articlesAtom'
import axios from 'axios'

// MUI -%- ////
import Container from '@mui/material/Container'

// System Components -%- ////

// Components -%- ////
import ArticleScapeComponentItem from './items/ArticleScapeComponentItem'

// Integrations -%- ////
async function fetchArticles() {
    try {
        const base = process.env.REACT_APP_BACKEND_URL.toString()
        const { data } = await axios.get(base + '/article/all')
        return data
    } catch (error) {
        console.log('error requesting articles:', error)
    }
}

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function ArticleScapeComponent() {
    const [articles, setArticles] = useRecoilState(articlesState)
    React.useEffect(() => {
        fetchArticles().then((data) => {
            console.log(data)
            if (data) {
                setArticles(data)
            }
            return articles
        })
        return () => {
            true
        }
    }, [])
    return (
        <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                flexWrap: 'wrap',
                flexFlow: { xs: 'column wrap', sm: 'row wrap' },
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                height: 'auto',
                width: '100%',
                maxWidth: '90%',
                margin: { xs: '0 auto', sm: '1.5vh auto', md: '3vh auto' },
                padding: '0 !important',
                gap: '1.5em',
            }}
        >
            {useRecoilValue(articlesState)?.map((data) => (
                <ArticleScapeComponentItem
                    key={data?.['id']}
                    id={data?.['id']}
                    slug={data?.['slug']}
                    cover={data?.['cover']}
                    title={data?.['title']}
                    topic={data?.['topic']}
                    caption={data?.['caption']}
                />
            ))}
        </Container>
    )
}

// System -%- ////

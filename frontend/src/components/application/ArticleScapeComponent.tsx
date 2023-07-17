// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////
import Container from '@mui/material/Container'

// System Components -%- ////

// Components -%- ////
import ArticleScapeComponentItem from './items/ArticleScapeComponentItem'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
type ArticleScapeComponentProps = {
    articles: {
        id: number
        slug: string
        cover: string
        title: string
        topic: string
        caption: string
    }[]
}
export default function ArticleScapeComponent(
    props: ArticleScapeComponentProps
) {
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
            {props?.['articles']?.map((data) => (
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

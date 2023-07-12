// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

// System Components -%- ////

// Components -%- ////
import BlogScapeComponentItem from './items/BlogScapeComponentItem'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
type BlogScapeComponentProps = {
    blog_scape: {
        id: number
        slug: string
        cover: string
        title: string
        topic: string
        caption: string
    }[]
}
export default function BlogScapeComponent(props: BlogScapeComponentProps) {
    return (
        <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                flexWrap: { xs: 'wrap', md: 'nowrap' },
                flexFlow: { xs: 'column wrap', md: 'row nowrap' },
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                height: 'auto',
                width: '100%',
                maxWidth: '90%',
                margin: { xs: '0 auto', md: '3vh auto' },
                padding: '0 !important',
                gap: '1.5vw',
            }}
        >
            {props?.['blog_scape']?.map((data) => (
                <BlogScapeComponentItem
                    key={data?.['id']}
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

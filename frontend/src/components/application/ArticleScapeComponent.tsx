// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilState, useRecoilValue } from 'recoil'
import { articlesState } from '../../recoil/atoms/articlesAtom'

// MUI -%- ////
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// System Components -%- ////

// Components -%- ////
import ArticleScapeComponentItem from './items/ArticleScapeComponentItem'

// Middleware & Integrations -%- ////
import { getArticles } from '../../functions/articles'

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function ArticleScapeComponent() {
    // State Hook
    const [articles, setArticles] = useRecoilState(articlesState)

    // State Refresher Hook
    React.useEffect(() => {
        if (!articles?.length) {
            getArticles().then((data) => {
                if (data) {
                    setArticles(data)
                } else {
                    setArticles([])
                }
            })
        }
        return () => {
            true
        }
    }, [])

    // State Condenser Hook
    const articleList = useRecoilValue(articlesState)

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
                margin: { xs: '3vh auto', md: '3vh auto' },
                padding: '0 !important',
                gap: '1.5em',
            }}
        >
            {articleList?.length > 1 ? (
                articleList?.map((data) => (
                    <ArticleScapeComponentItem
                        key={data?.['id']}
                        id={data?.['id']}
                        slug={data?.['slug']}
                        cover={data?.['cover']}
                        title={data?.['title']}
                        topic={data?.['topic']}
                        caption={data?.['caption']}
                    />
                ))
            ) : (
                <Box
                    sx={{
                        display: 'inline-flex',
                        order: '1',
                        flexBasis: '100%',
                        flex: '1',
                        alignSelf: 'center',
                        height: 'auto',
                        width: { xs: '100%', md: '50%' },
                        margin: { xs: '1.5vh 3vw 3vh 3vw', md: '0 auto' },
                        padding: '0',
                    }}
                >
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                            height: 'auto',
                            width: '100%',
                            margin: { xs: '9vh 9vw', md: '15vh 15vw' },
                            padding: '0',
                            textAlign: 'center',
                            color: '#9E9E9E',
                        }}
                    >
                        Articles are unavailable at this time
                    </Typography>
                </Box>
            )}
        </Container>
    )
}

// System -%- ////

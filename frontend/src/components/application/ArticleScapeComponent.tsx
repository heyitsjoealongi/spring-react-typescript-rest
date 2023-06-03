// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilState, useRecoilValue } from 'recoil'
import { articlesState } from '../../recoil/atoms/articlesAtom'

// Types -%- ////
import { ArticleT } from '../../types/article'

// MUI -%- ////
import Divider from '@mui/material/Divider'
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
    const articlesList = useRecoilValue(articlesState)

    // State Cache Hook
    const articlesListCache = React.useMemo(() => articlesList, [articles])

    return (
        <React.Fragment>
            <Divider light />
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
                {articlesListCache?.length > 0 ? (
                    articlesListCache?.map((data: ArticleT) => (
                        <React.Fragment key={data?.['article_id']}>
                            <ArticleScapeComponentItem
                                article_id={data?.['article_id']}
                                article_slug={data?.['article_slug']}
                                article_cover={data?.['article_cover']}
                                article_title={data?.['article_title']}
                                article_topic={data?.['article_topic']}
                                article_caption={data?.['article_caption']}
                            />
                        </React.Fragment>
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
            <Divider light />
        </React.Fragment>
    )
}

// System -%- ////

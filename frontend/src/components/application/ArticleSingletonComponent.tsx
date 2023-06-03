// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilState, useRecoilValue } from 'recoil'
import { contentsState } from '../../recoil/atoms/contentsAtom'

// Types -%- ////
import { SlugT, ContentsT } from '../../types/contents'

// MUI -%- ////
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// System Components -%- ////

// Components -%- ////
import ArticleSingletonComponentItem from './items/ArticleSingletonComponentItem'

// Middleware & Integrations -%- ////
import { getContentsSearch } from '../../functions/contents'

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function ArticleSingletonComponent({ slug }: SlugT) {
    // State Hook
    const [contents, setContents] = useRecoilState(contentsState)

    // State Refresher Hook
    React.useEffect(() => {
        if (!contents?.length) {
            getContentsSearch(slug).then((data) => {
                if (data) {
                    setContents(data)
                } else {
                    setContents([])
                }
            })
        }
        return () => {
            true
        }
    }, [])

    // State Condenser Hook
    const contentsList = useRecoilValue(contentsState)

    // State Cache Hook
    const contentsListCache = React.useMemo(() => contentsList, [contents])

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
                {contentsListCache?.length > 0 ? (
                    contentsListCache?.map((data: ContentsT) => (
                        <React.Fragment key={data?.['article_id']}>
                            <ArticleSingletonComponentItem
                                article_id={data?.['article_id']}
                                article_slug={data?.['article_slug']}
                                article_content={data?.['article_content']}
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
                            Content is unavailable at this time
                        </Typography>
                    </Box>
                )}
            </Container>
            <Divider light />
        </React.Fragment>
    )
}

// System -%- ////

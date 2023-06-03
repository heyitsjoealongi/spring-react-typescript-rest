// React -%- ////
import * as React from 'react'

// Packages -%- ////

// Types -%- ////

// MUI -%- ////
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

// System Components -%- ////

// Components -%- ////
import TitleComponent from '../../components/interactive/TitleComponent'
import SwiperImageComponentItem from '../../components/interactive/items/SwiperImageComponentItem'
import ArticleScapeComponent from '../../components/application/ArticleScapeComponent'
import SponsorBannerComponent from '../../components/interactive/SponsorBannerComponent'

// Middleware & Integrations -%- ////
const contents = {
    content_id: 0,
    content_title: 'Spring React TypeScript REST',
    content_sub_title: 'Modern frameworks for establishing performant apps',
    content_paragraphs: [
        {
            content_paragraph_id: 0,
            content_paragraph_content:
                'Create type-safe and performant interfaces backed with multi-threaded data models for definitive backend algorithms that transform and hone information.',
        },
    ],
    content_button_title: 'Learn more',
    content_button_link: '/',
}
const swipes = [
    {
        image_id: 0,
        image_description: 'Slide one',
        image_source: `${
            process.env.REACT_APP_URL + '/assets/jpg/example.jpg'
        }`,
    },
    {
        image_id: 1,
        image_description: 'Slide two',
        image_source: `${
            process.env.REACT_APP_URL + '/assets/jpg/example.jpg'
        }`,
    },
    {
        image_id: 2,
        image_description: 'Slide three',
        image_source: `${
            process.env.REACT_APP_URL + '/assets/jpg/example.jpg'
        }`,
    },
]

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function ArticlesView() {
    return (
        <React.Fragment>
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
                <Box
                    sx={{
                        order: '0',
                        flexBasis: '100%',
                        flex: '1',
                        alignSelf: 'center',
                        height: 'auto',
                        width: { xs: '100%', md: '50%' },
                        margin: { xs: '3vh 3vw 1.5vh 3vw', md: '0 auto' },
                        padding: '0',
                    }}
                >
                    <TitleComponent {...contents} />
                </Box>
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
                        borderStyle: 'solid',
                        borderWidth: '0.5px',
                        borderColor: '#BDBDBD',
                        borderRadius: '3px',
                    }}
                >
                    <SwiperImageComponentItem swipes={swipes} />
                </Box>
            </Container>
            <ArticleScapeComponent />
            <SponsorBannerComponent />
        </React.Fragment>
    )
}

// System -%- ////

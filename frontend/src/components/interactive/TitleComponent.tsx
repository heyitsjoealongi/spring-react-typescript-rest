// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { Link } from 'react-router-dom'

// Types -%- ////
import { TitleContentT, ParagraphContentT } from '../../types/interactive'

// MUI -%- ////
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function TitleComponent({
    content_id,
    content_title,
    content_sub_title,
    content_paragraphs,
    content_button_link,
    content_button_title,
}: TitleContentT) {
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
            <Box
                key={content_id}
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
                <Typography
                    variant="h1"
                    gutterBottom
                    sx={{
                        height: 'auto',
                        width: '100%',
                        margin: '0 0 0.3vh 0',
                        padding: '0',
                        textAlign: 'left',
                    }}
                >
                    {content_title}
                </Typography>
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                        height: 'auto',
                        width: '100%',
                        margin: '0 0 1.5vh 0',
                        padding: '0',
                        textAlign: 'left',
                    }}
                >
                    {content_sub_title}
                </Typography>
                {content_paragraphs?.map(
                    ({
                        content_paragraph_id,
                        content_paragraph_content,
                    }: ParagraphContentT) => (
                        <Typography
                            key={content_paragraph_id}
                            variant="body1"
                            gutterBottom
                            sx={{
                                height: 'auto',
                                width: '100%',
                                margin: '0 0 1.5vh 0',
                                padding: '0',
                                textAlign: 'left',
                            }}
                        >
                            {content_paragraph_content}
                        </Typography>
                    )
                )}
                <Link
                    to={content_button_link}
                    target="_self"
                    aria-label="title-button-link"
                    type="link"
                >
                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        sx={{
                            height: 'auto',
                            width: { xs: '100%', md: '33.33%' },
                            margin: '1.5vh auto',
                            padding: '0.5em 1.5em',
                            color: '#F5F5F5',
                            background: '#212121',
                            boxShadow: 'none',
                            '&:hover': {
                                color: '#212121',
                                background: '#F5F5F5',
                            },
                        }}
                    >
                        {content_button_title}
                    </Button>
                </Link>
            </Box>
        </Container>
    )
}

// System -%- ////

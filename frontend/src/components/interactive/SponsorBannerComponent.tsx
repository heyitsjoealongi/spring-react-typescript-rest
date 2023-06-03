// React -%- ////
import * as React from 'react'

// Packages -%- ////

// Types -%- ////

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
export default function SponsorBannerComponent() {
    return (
        <Box
            sx={{
                display: 'block',
                height: 'auto',
                width: '100%',
                margin: '0 auto',
                padding: { xs: '3vh 3vw', md: '6vh 0' },
                background: '#CDDC39',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundClip: 'border-box',
            }}
        >
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
                    <Typography
                        variant="h1"
                        gutterBottom
                        sx={{
                            height: 'auto',
                            width: { xs: '100%', md: '50%' },
                            margin: '0',
                            padding: '0',
                            textAlign: 'left',
                        }}
                    >
                        Become a subscriber
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            height: 'auto',
                            width: { xs: '100%', md: '50%' },
                            margin: '0',
                            padding: '0',
                            textAlign: 'left',
                        }}
                    >
                        Access the full offering of cloud native code
                        micro-content, right from wherever you are, anytime you
                        would like.
                    </Typography>
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
                        Subscribe for access
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

// System -%- ////

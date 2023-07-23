// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// System Components -%- ////

// Components -%- ////
import SwiperAutoplayProgressComponentItem from './items/SwiperAutoplayProgressComponentItem'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
type HeroSwiperComponentProps = {
    hero_swipper: {
        id: number
        source: string
        description: string
    }[]
}
export default function SponsorBannerComponent(
    props: HeroSwiperComponentProps
) {
    return (
        <Box
            sx={{
                display: 'block',
                height: 'auto',
                width: '100%',
                margin: '0 auto',
                padding: { xs: '3vh 3vw', md: '6vh 6vw' },
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
                    margin: { xs: '0 auto', md: '6vh auto' },
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
                        Become a member
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
                        Access the full offering of micro-content, code, and
                        cloud advice right from you computer desk.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

// System -%- ////

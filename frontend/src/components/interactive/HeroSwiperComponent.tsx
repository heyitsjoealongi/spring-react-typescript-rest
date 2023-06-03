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

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
type HeroSwiperComponentProps = {
    hero_swipper: {
        id: number
        source: string
        description: string
    }[]
}
export default function HeroSwiperComponent(props: HeroSwiperComponentProps) {
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
                        margin: '0',
                        padding: '0',
                        textAlign: 'left',
                    }}
                >
                    Spring React TypeScript REST
                </Typography>
                <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                        height: 'auto',
                        width: '100%',
                        margin: '0',
                        padding: '0',
                        textAlign: 'left',
                    }}
                >
                    Create type-safe and performant interfaces backed with
                    multi-threaded data models for definitive backend algorithms
                    that transform and hone information.
                </Typography>
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
                <SwiperAutoplayProgressComponentItem
                    hero_swipper={props?.['hero_swipper']}
                />
            </Box>
        </Container>
    )
}

// System -%- ////

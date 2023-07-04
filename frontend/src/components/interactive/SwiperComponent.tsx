// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
// import Typography from '@mui/material/Typography'

// System Components -%- ////

// Components -%- ////
import SwiperAutoplayProgressComponentItem from './items/SwiperAutoplayProgressComponentItem'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function SwiperComponent() {
    return (
        <React.Fragment>
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    flexFlow: 'row nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    height: 'auto',
                    width: '100%',
                    maxWidth: '90%',
                    margin: { xs: '3vh 3vw', md: '3vh auto' },
                    padding: 0,
                    gap: '0',
                }}
            >
                <Box
                    sx={{
                        order: '0',
                        flexBasis: { xs: '100%', md: 'auto' },
                        flex: '0',
                        alignSelf: 'center',
                        height: 'auto',
                        width: '100%',
                        margin: '0 auto',
                        padding: '0',
                    }}
                >
                    <SwiperAutoplayProgressComponentItem />
                </Box>
            </Container>
        </React.Fragment>
    )
}

// System -%- ////

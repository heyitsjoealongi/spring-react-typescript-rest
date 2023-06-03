// React -%- ////
import * as React from 'react'

// Packages -%- ////

// Types -%- ////

// MUI -%- ////
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

// System Components -%- ////

// Components -%- ////
import CircularProgressGeneralComponentItem from './items/CircularProgressGeneralComponentItem'

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function ErrorUtilityComponent() {
    return (
        <Container
            maxWidth="xl"
            sx={{
                height: 'auto',
                width: '100%',
                margin: '0 auto',
                padding: '0 !important',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    height: '75vh',
                    width: '100%',
                    margin: { xs: '0 3vw', md: '0 auto' },
                    padding: '0 !important',
                    gap: '0',
                }}
            >
                <CircularProgressGeneralComponentItem />
            </Box>
        </Container>
    )
}

// System -%- ////

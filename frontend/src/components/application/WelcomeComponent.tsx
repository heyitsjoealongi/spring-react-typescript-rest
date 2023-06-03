// React -%- ////
import * as React from 'react'

// Packages -%- ////

// Types -%- ////

// MUI -%- ////
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import { getUserData } from '../../functions/account'

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function WelcomeComponent() {
    const userData = getUserData()
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
                    variant="h1"
                    gutterBottom
                    sx={{
                        height: 'auto',
                        width: '100%',
                        margin: '0',
                        padding: '0',
                        textAlign: 'center',
                    }}
                >
                    Welcome, {userData?.['Username']}
                </Typography>
            </Box>
        </Container>
    )
}

// System -%- ////

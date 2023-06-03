// React -%- ////
import React from 'react'

// Packages -%- ////

// Types -%- ////

// MUI -%- ////
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function CircularProgressGeneralComponentItem() {
    return (
        <Box
            sx={{
                flex: 1,
                alignSelf: 'center',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                flexFlow: 'column nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                height: 'auto',
                width: '100%',
                margin: '0 auto',
                padding: '0',
                gap: '0',
            }}
        >
            <CircularProgress
                sx={{
                    flex: 0,
                    alignSelf: 'center',
                    height: 'auto',
                    width: '100%',
                    margin: '0 auto',
                    padding: '0',
                    gap: '0',
                    color: '#CDDC39',
                }}
            />
        </Box>
    )
}

// System -%- ////

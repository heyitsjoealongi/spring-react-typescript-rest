// https://mui.com/material-ui/react-progress/

// React -%- ////
import React from 'react'

// Packages -%- ////

// MUI -%- ////
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
export default function CircularProgressGeneralComponent() {
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

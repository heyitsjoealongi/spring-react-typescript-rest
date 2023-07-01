// https://mui.com/material-ui/react-progress/

// React -%- ////
import React from 'react'

// Packages -%- ////

// MUI -%- ////
import Box from '@mui/material/Box'

// Components -%- ////
import Menu from '../../components/menu/MenuComponent'
import CircularProgressGeneralComponent from '../../components/general/CircularProgressGeneralComponent'
import StartedComponent from '../../components/utility/StartedComponent'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
export default function ErrorView() {
    return (
        <>
            <Menu />
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
                    margin: '0 auto',
                    padding: '0',
                    gap: '0',
                }}
            >
                <CircularProgressGeneralComponent />
            </Box>
            <StartedComponent />
        </>
    )
}

// System -%- ////

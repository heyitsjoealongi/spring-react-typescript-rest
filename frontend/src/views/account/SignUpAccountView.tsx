// React -%- ////
import * as React from 'react'
// Packages -%- ////

// MUI -%- ////
import Box from '@mui/material/Box'

// Components -%- ////
import Menu from '../../components/menu/MenuComponent'
import SignUpAccountComponent from '../../components/account/SignUpAccountComponent'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function SignUpAccountView() {
    return (
        <React.Fragment>
            <Menu />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    flexFlow: 'column wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    height: 'auto',
                    width: '100%',
                    margin: '18vh auto',
                    padding: '0',
                    gap: '0',
                    background: 'none',
                    border: 'none',
                }}
            >
                <SignUpAccountComponent />
            </Box>
        </React.Fragment>
    )
}

// System -%- ////

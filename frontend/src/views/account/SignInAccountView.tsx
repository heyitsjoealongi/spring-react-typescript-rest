// React -%- ////
import * as React from 'react'

// Packages -%- ////

// Components -%- ////
import Box from '@mui/material/Box'
import Menu from '../../components/menu/MenuComponent'
import SignInAccountComponent from '../../components/account/SignInAccountComponent'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function SignInAccountView() {
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
                <SignInAccountComponent />
            </Box>
        </React.Fragment>
    )
}

// System -%- ////

// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////
import Box from '@mui/material/Box'

// Components -%- ////
import Menu from '../../components/menu/MenuComponent'
import SignOutAccountComponent from '../../components/account/SignOutAccountComponent'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function SignOutAccountView() {
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
                <SignOutAccountComponent />
            </Box>
        </React.Fragment>
    )
}

// System -%- ////

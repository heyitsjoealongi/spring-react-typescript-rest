// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////
import Box from '@mui/material/Box'

// System Components -%- ////
import Menu from '../../components/menu/MenuComponent'

// Components -%- ////
import ConfirmSignUpAccountComponent from '../../components/account/ConfirmSignUpAccountComponent'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function ConfirmSignUpAccountView() {
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
                <ConfirmSignUpAccountComponent />
            </Box>
        </React.Fragment>
    )
}

// System -%- ////

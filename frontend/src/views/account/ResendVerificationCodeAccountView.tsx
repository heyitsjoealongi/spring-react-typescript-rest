// React -%- ////
import React from 'react'

// Packages -%- ////

// Components -%- ////
import Box from '@mui/material/Box'
import Menu from '../../components/menu/MenuComponent'
import ResendVerificationCodeAccountComponent from '../../components/account/ResendVerificationCodeAccountComponent'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
export default function ResendVerificationCodeAccountView() {
    return (
        <>
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
                <ResendVerificationCodeAccountComponent />
            </Box>
        </>
    )
}

// System -%- ////

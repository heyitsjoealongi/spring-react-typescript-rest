// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useLocation } from 'react-router-dom'

// Types -%- ////

// MUI -%- ////
import Box from '@mui/material/Box'

// System Components -%- ////

// Components -%- ////
import SignUpAccountComponent from '../../components/account/SignUpAccountComponent'
import ConfirmSignUpAccountComponent from '../../components/account/ConfirmSignUpAccountComponent'
import ResendVerificationCodeAccountComponent from '../../components/account/ResendVerificationCodeAccountComponent'
import SignInAccountComponent from '../../components/account/SignInAccountComponent'
import SignOutAccountComponent from '../../components/account/SignOutAccountComponent'

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function AccountView() {
    const location = useLocation()
    const { pathname } = location
    if (pathname === '/sign-up') {
        return (
            <React.Fragment>
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
    } else if (pathname === '/confirm-sign-up') {
        return (
            <React.Fragment>
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
    } else if (pathname === '/resend-verification-code') {
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    } else if (pathname === '/sign-in') {
        return (
            <React.Fragment>
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
    } else if (pathname === '/sign-out') {
        return (
            <React.Fragment>
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
}

// System -%- ////

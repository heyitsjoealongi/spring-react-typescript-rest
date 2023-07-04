// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// MUI -%- ////

// Components -%- ////
import ErrorUtilityView from './views/utility/ErrorUtilityView'
import PrimaryInteractiveView from './views/interactive/PrimaryInteractiveView'
import SignUpAccountView from './views/account/SignUpAccountView'
import ConfirmSignUpAccountView from './views/account/ConfirmSignUpAccountView'
import ResendVerificationCodeAccountView from './views/account/ResendVerificationCodeAccountView'
import SignInAccountView from './views/account/SignInAccountView'
import SignOutAccountView from './views/account/SignOutAccountView'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////
import './assets/styles/App.css'
const theme = createTheme({
    typography: {
        fontFamily: ['Overpass'].join(','),
    },
    palette: {
        primary: {
            main: '#9E9E9E',
            light: '#F5F5F5',
            dark: '#616161',
            contrastText: '#F5F5F5',
        },
        secondary: {
            main: '#CDDC39',
            light: '#F5F5F5',
            dark: '#616161',
            contrastText: '#F5F5F5',
        },
    },
})

// Application -%- ////
const router = createBrowserRouter([
    {
        path: '/',
        element: <PrimaryInteractiveView />,
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/sign-up',
        element: <SignUpAccountView />,
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/confirm-sign-up',
        element: <ConfirmSignUpAccountView />,
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/resend-verification-code',
        element: <ResendVerificationCodeAccountView />,
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/sign-in',
        element: <SignInAccountView />,
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/sign-out',
        element: <SignOutAccountView />,
        errorElement: <ErrorUtilityView />,
    },
])

export default function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <RouterProvider
                    router={router}
                    fallbackElement={<ErrorUtilityView />}
                />
            </ThemeProvider>
        </React.Fragment>
    )
}

// System -%- ////

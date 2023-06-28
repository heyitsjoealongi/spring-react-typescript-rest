// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Components -%- ////
import ErrorView from './views/general/ErrorView'
import DefaultView from './views/general/DefaultView'
import SignUpAccountView from './views/account/SignUpAccountView'
import ConfirmSignUpAccount from './views/account/ConfirmSignUpAccount'
import ResendVerificationCodeAccountView from './views/account/ResendVerificationCodeAccountView'
import SignInAccountView from './views/account/SignInAccountView'
import SignOutAccountView from './views/account/SignOutAccountView'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////
import './App.css'

// Styled Components -%- ////
const theme = createTheme({
    typography: {
        fontFamily: ['Overpass'].join(','),
    },
})

// Application -%- ////
const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultView />,
        errorElement: <ErrorView />,
    },
    {
        path: '/sign-up',
        element: <SignUpAccountView />,
        errorElement: <ErrorView />,
    },
    {
        path: '/confirm-sign-up',
        element: <ConfirmSignUpAccount />,
        errorElement: <ErrorView />,
    },
    {
        path: '/resend-verification-code',
        element: <ResendVerificationCodeAccountView />,
        errorElement: <ErrorView />,
    },
    {
        path: '/sign-in',
        element: <SignInAccountView />,
        errorElement: <ErrorView />,
    },
    {
        path: '/sign-out',
        element: <SignOutAccountView />,
        errorElement: <ErrorView />,
    },
])

export default function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <RouterProvider
                    router={router}
                    fallbackElement={<p>Loading...</p>}
                />
            </ThemeProvider>
        </>
    )
}

// System -%- ////

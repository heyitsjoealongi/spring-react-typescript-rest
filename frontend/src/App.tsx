// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Components -%- ////
import ErrorView from './views/general/ErrorView'
import DefaultView from './views/general/DefaultView'
import CreateAccountView from './views/account/CreateAccountView'
import ConfirmAccountView from './views/account/ConfirmAccountView'
import ResendVerificationCodeAccountView from './views/account/ResendVerificationCodeAccountView'
import AccessAccountView from './views/account/AccessAccountView'

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
        path: '/create-account',
        element: <CreateAccountView />,
        errorElement: <ErrorView />,
    },
    {
        path: '/confirm-account',
        element: <ConfirmAccountView />,
        errorElement: <ErrorView />,
    },
    {
        path: '/resend-verification-code',
        element: <ResendVerificationCodeAccountView />,
        errorElement: <ErrorView />,
    },
    {
        path: '/access-account',
        element: <AccessAccountView />,
        errorElement: <ErrorView />,
    }
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

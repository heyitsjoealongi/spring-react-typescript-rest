// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// MUI -%- ////

// Components -%- ////
import ErrorUtilityView from './views/utility/ErrorUtilityView'
import PrimaryView from './views/PrimaryView'
import PrimaryInteractiveView from './views/interactive/PrimaryInteractiveView'
import PrimaryAccountView from './views/account/PrimaryAccountView'
import PrimaryApplicationView from './views/application/PrimaryApplicationView'

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
        element: (
            <PrimaryView>
                <PrimaryInteractiveView />
            </PrimaryView>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/sign-up',
        element: (
            <PrimaryView>
                <PrimaryAccountView />
            </PrimaryView>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/confirm-sign-up',
        element: (
            <PrimaryView>
                <PrimaryAccountView />
            </PrimaryView>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/resend-verification-code',
        element: (
            <PrimaryView>
                <PrimaryAccountView />
            </PrimaryView>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/sign-in',
        element: (
            <PrimaryView>
                <PrimaryAccountView />
            </PrimaryView>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/sign-out',
        element: (
            <PrimaryView>
                <PrimaryAccountView />
            </PrimaryView>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/welcome',
        element: (
            <PrimaryView>
                <PrimaryApplicationView />
            </PrimaryView>
        ),
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

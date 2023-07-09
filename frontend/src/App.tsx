// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { authenticatedState } from './recoil/atoms/authenticatedAtom'

// MUI -%- ////

// Components -%- ////
import ErrorUtilityView from './views/utility/ErrorUtilityView'
import ViewTemplate from './views/ViewTemplate'
import LandingView from './views/landing/LandingView'
import AccountView from './views/account/AccountView'
import ApplicationView from './views/application/ApplicationView'

// Integrations -%- ////

// Middleware -%- ////
type AuthenticatedProps = {
    children: React.ReactNode
}
const Authenticated = ({ children }: AuthenticatedProps) => {
    return useRecoilValue(authenticatedState) === true ? (
        children
    ) : (
        <Navigate to="/sign-in" replace />
    )
}

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
            <ViewTemplate>
                <LandingView />
            </ViewTemplate>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/sign-up',
        element: (
            <ViewTemplate>
                <AccountView />
            </ViewTemplate>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/confirm-sign-up',
        element: (
            <ViewTemplate>
                <AccountView />
            </ViewTemplate>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/resend-verification-code',
        element: (
            <ViewTemplate>
                <AccountView />
            </ViewTemplate>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/sign-in',
        element: (
            <ViewTemplate>
                <AccountView />
            </ViewTemplate>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/sign-out',
        element: (
            <ViewTemplate>
                <AccountView />
            </ViewTemplate>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/welcome',
        element: (
            <Authenticated>
                <ViewTemplate>
                    <ApplicationView />
                </ViewTemplate>
            </Authenticated>
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

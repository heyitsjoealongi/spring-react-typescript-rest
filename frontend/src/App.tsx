// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { authenticatedState } from './recoil/atoms/authenticatedAtom'
import { confirmingState } from './recoil/atoms/confirmingAtom'

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
type UnauthenticatedProps = {
    children: React.ReactNode
}
const Unauthenticated = ({ children }: UnauthenticatedProps) => {
    return useRecoilValue(authenticatedState) === false ? (
        children
    ) : (
        <Navigate to="/welcome" replace />
    )
}
type ConfirmingProps = {
    children: React.ReactNode
}
const Confirming = ({ children }: ConfirmingProps) => {
    return useRecoilValue(confirmingState) === true ? (
        children
    ) : (
        <Navigate to="/" replace />
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
            <Unauthenticated>
                <ViewTemplate>
                    <AccountView />
                </ViewTemplate>
            </Unauthenticated>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/confirm-sign-up',
        element: (
            <Confirming>
                <ViewTemplate>
                    <AccountView />
                </ViewTemplate>
            </Confirming>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/resend-verification-code',
        element: (
            <Confirming>
                <ViewTemplate>
                    <AccountView />
                </ViewTemplate>
            </Confirming>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/sign-in',
        element: (
            <Unauthenticated>
                <ViewTemplate>
                    <AccountView />
                </ViewTemplate>
            </Unauthenticated>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/sign-out',
        element: (
            <Authenticated>
                <ViewTemplate>
                    <AccountView />
                </ViewTemplate>
            </Authenticated>
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

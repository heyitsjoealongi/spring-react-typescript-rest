// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { authenticatedState } from './recoil/atoms/authenticatedAtom'
import { confirmingState } from './recoil/atoms/confirmingAtom'

// Types -%- ////
import { AuthorizeT } from './types/account'

// MUI -%- ////

// Components -%- ////
import ErrorUtilityView from './views/utility/ErrorUtilityView'
import ViewTemplate from './views/ViewTemplate'
import LandingView from './views/landing/LandingView'
import ArticlesView from './views/application/ArticlesView'
import ArticleView from './views/application/ArticleView'
import TopicView from './views/application/TopicView'
import AnalyticView from './views/application/AnalyticView'
import PrivacyView from './views/application/PrivacyView'
import AccountView from './views/account/AccountView'
import ApplicationView from './views/application/ApplicationView'

// Middleware & Integrations -%- ////
const Authenticated = ({ children }: AuthorizeT) => {
    return useRecoilValue(authenticatedState) === true ? (
        children
    ) : (
        <Navigate to="/sign-in" replace />
    )
}
const Unauthenticated = ({ children }: AuthorizeT) => {
    return useRecoilValue(authenticatedState) === false ? (
        children
    ) : (
        <Navigate to="/welcome" replace />
    )
}
const Confirming = ({ children }: AuthorizeT) => {
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
        path: '/articles/:slug',
        element: (
            <ViewTemplate>
                <ArticleView />
            </ViewTemplate>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/articles',
        element: (
            <ViewTemplate>
                <ArticlesView />
            </ViewTemplate>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/topics',
        element: (
            <ViewTemplate>
                <TopicView />
            </ViewTemplate>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/analytics',
        element: (
            <ViewTemplate>
                <AnalyticView />
            </ViewTemplate>
        ),
        errorElement: <ErrorUtilityView />,
    },
    {
        path: '/privacy',
        element: (
            <ViewTemplate>
                <PrivacyView />
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

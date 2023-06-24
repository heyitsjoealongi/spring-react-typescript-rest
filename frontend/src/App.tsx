// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Components -%- ////
import Error from './views/general/Error'
import DefaultView from './views/general/DefaultView'
import CreateAccountView from './views/general/CreateAccountView'
import AccessAccountView from './views/general/AccessAccountView'

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
        errorElement: <Error />,
    },
    {
        path: '/create-account',
        element: <CreateAccountView />,
        errorElement: <Error />,
    },
    {
        path: '/access-account',
        element: <AccessAccountView />,
        errorElement: <Error />,
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

// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

// System Components -%- ////
import AppBarMenuComponent from './AppBarMenuComponent'
import BasicMenuComponentItem from './items/AppMenuComponentItem'

// Components -%- ////

// Integrations -%- ////
const appInfo = {
    app_title: 'Spring React TypeScript REST',
}
const appMenu = [
    {
        id: 0,
        app_menu_title: 'Home',
        app_menu_link: '/',
    },
    {
        id: 1,
        app_menu_title: 'Articles',
        app_menu_link: '/',
    },
    {
        id: 2,
        app_menu_title: 'Topics',
        app_menu_link: '/',
    },
    {
        id: 3,
        app_menu_title: 'Story',
        app_menu_link: '/',
    },
]
const userMenu = {
    authenticated: [
        {
            id: 0,
            user_menu_title: 'Sign out',
            user_menu_link: '/sign-out',
        },
    ],
    unauthenticated: [
        {
            id: 0,
            user_menu_title: 'Sign up',
            user_menu_link: '/sign-up',
        },
        {
            id: 1,
            user_menu_title: 'Sign in',
            user_menu_link: '/sign-in',
        },
    ],
    all: [
        {
            id: 0,
            user_menu_title: 'Sign up',
            user_menu_link: '/sign-up',
        },
        {
            id: 1,
            user_menu_title: 'Confirm sign up',
            user_menu_link: '/confirm-sign-up',
        },
        {
            id: 2,
            user_menu_title: 'Resend verification code',
            user_menu_link: '/resend-verification-code',
        },
        {
            id: 3,
            user_menu_title: 'Sign in',
            user_menu_link: '/sign-in',
        },
        {
            id: 4,
            user_menu_title: 'Sign out',
            user_menu_link: '/sign-out',
        },
    ],
}

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function MenuComponent() {
    return (
        <React.Fragment>
            <AppBarMenuComponent
                app_title={appInfo?.app_title}
                app_menu={appMenu}
                user_menu={userMenu}
            />
            <Container
                maxWidth="xl"
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    flexFlow: 'row nowrap',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    alignContent: 'flex-start',
                    height: 'auto',
                    width: '30vw',
                    margin: '3vh auto',
                    padding: '0 !important',
                    gap: '1.5vw',
                    background: 'none',
                    border: 'none',
                }}
            >
                {appMenu?.map((data) => (
                    <Box
                        key={data?.['id']}
                        sx={{
                            display: 'inline-flex',
                            order: data?.['id'],
                            flex: 'none',
                            alignSelf: 'flex-start',
                            height: 'auto',
                            width: 'auto',
                            margin: '0 auto',
                            padding: '0',
                            background: 'none',
                            border: 'none',
                        }}
                    >
                        <BasicMenuComponentItem
                            app_menu_title={data?.['app_menu_title']}
                            app_menu_link_item_link={data?.['app_menu_link']}
                        />
                    </Box>
                ))}
            </Container>
        </React.Fragment>
    )
}

// System -%- ////

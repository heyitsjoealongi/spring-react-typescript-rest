// React -%- ////
import * as React from 'react'

// Packages -%- ////
import styled from '@emotion/styled'

// MUI -%- ////

// Components -%- ////
import AppBarMenuComponent from './AppBarMenuComponent'
import BasicMenuComponentItem from './items/AppMenuComponentItem'

// Integrations -%- ////
const appInfo = {
    app_title: 'Frontend',
}
const appMenu = [
    {
        id: 0,
        app_menu_title: 'Menu one',
        app_menu_link: '/',
    },
    {
        id: 1,
        app_menu_title: 'Menu two',
        app_menu_link: '/',
    },
    {
        id: 2,
        app_menu_title: 'Menu three',
        app_menu_link: '/',
    },
    {
        id: 3,
        app_menu_title: 'Menu four',
        app_menu_link: '/',
    },
]
const userMenu = [
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
]

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////
const MenuFlexComponent = styled.div`
    display: none;
    @media (min-width: 1000px) {
        display: flex;
        flexdirection: row;
        flexwrap: nowrap;
        flexflow: row nowrap;
        justifycontent: flex-start;
        alignitems: flex-start;
        aligncontent: flex-start;
        height: auto;
        width: 50vw;
        margin: 1.5em auto;
        padding: 0;
        gap: 1.5em;
        background: none;
        border: none;
    }
`

const MenuFlexItemComponent = styled.div`
    order: 0;
    flex: none;
    alignself: flex-start;
    height: auto;
    width: auto;
    margin: 0 auto;
    padding: 0;
    background: none;
    border: none;
`

// Application -%- ////
export default function MenuComponent() {
    return (
        <>
            <AppBarMenuComponent
                app_title={appInfo?.app_title}
                app_menu={appMenu}
                user_menu={userMenu}
            />
            <MenuFlexComponent>
                {appMenu.map((data) => (
                    <MenuFlexItemComponent key={data?.id}>
                        <BasicMenuComponentItem
                            app_menu_title={data?.app_menu_title}
                            app_menu_link_item_link={data?.app_menu_link}
                        />
                    </MenuFlexItemComponent>
                ))}
            </MenuFlexComponent>
        </>
    )
}

// System -%- ////

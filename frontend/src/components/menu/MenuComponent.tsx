// React -%- ////
import * as React from 'react'

// Packages -%- ////
import styled from '@emotion/styled'

// Components -%- ////
import AppBarMenuComponent from './AppBarMenuComponent'
import BasicMenuComponentItem from './items/BasicMenuComponentItem'

// Integrations -%- ////
const appBar = {
    app_bar_title: 'Frontend',
}
const basicMenus = [
    {
        id: 0,
        basic_menu_title: 'Menu one',
        basic_menu_link: '/',
    },
    {
        id: 1,
        basic_menu_title: 'Menu two',
        basic_menu_link: '/',
    },
    {
        id: 2,
        basic_menu_title: 'Menu three',
        basic_menu_link: '/',
    },
    {
        id: 3,
        basic_menu_title: 'Menu four',
        basic_menu_link: '/',
    },
]
const userMenus = [
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
        flexDirection: row;
        flexWrap: nowrap;
        flexFlow: row nowrap;
        justifyContent: flex-start;
        alignItems: flex-start;
        alignContent: flex-start;
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
    alignSelf: flex-start;
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
                app_bar_title={appBar?.app_bar_title}
                app_bar_menu={basicMenus}
                app_bar_user_menu={userMenus}
            />
            <MenuFlexComponent>
                {basicMenus.map((data) => (
                    <MenuFlexItemComponent key={data?.id}>
                        <BasicMenuComponentItem
                            basic_menu_title={data?.basic_menu_title}
                            basic_item_link={data?.basic_menu_link}
                        />
                    </MenuFlexItemComponent>
                ))}
            </MenuFlexComponent>
        </>
    )
}

// System -%- ////

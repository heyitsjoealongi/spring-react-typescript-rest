// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'

// Components -%- ////
import BrandMenuComponentItemComponent from './items/BrandMenuComponentItem'
import FooterMenuComponentItem from './items/FooterMenuComponentItem'

// Integrations -%- ////
const appInfo = {
    app_title: 'Frontend',
}
const footerMenuOne = [
    {
        id: 0,
        footer_menu_item_title: 'Menu one',
        footer_menu_item_link: '/',
    },
    {
        id: 1,
        footer_menu_item_title: 'Menu two',
        footer_menu_item_link: '/',
    },
    {
        id: 2,
        footer_menu_item_title: 'Menu three',
        footer_menu_item_link: '/',
    },
    {
        id: 3,
        footer_menu_item_title: 'Menu four',
        footer_menu_item_link: '/',
    },
]
const footerMenuTwo = [
    {
        id: 0,
        footer_menu_item_title: 'Menu one',
        footer_menu_item_link: '/',
    },
    {
        id: 1,
        footer_menu_item_title: 'Menu two',
        footer_menu_item_link: '/',
    },
    {
        id: 2,
        footer_menu_item_title: 'Menu three',
        footer_menu_item_link: '/',
    },
    {
        id: 3,
        footer_menu_item_title: 'Menu four',
        footer_menu_item_link: '/',
    },
]
const footerMenuThree = [
    {
        id: 0,
        footer_menu_item_title: 'Menu one',
        footer_menu_item_link: '/',
    },
    {
        id: 1,
        footer_menu_item_title: 'Menu two',
        footer_menu_item_link: '/',
    },
    {
        id: 2,
        footer_menu_item_title: 'Menu three',
        footer_menu_item_link: '/',
    },
    {
        id: 3,
        footer_menu_item_title: 'Menu four',
        footer_menu_item_link: '/',
    },
]
const footerMenuFour = [
    {
        id: 0,
        footer_menu_item_title: 'Menu one',
        footer_menu_item_link: '/',
    },
    {
        id: 1,
        footer_menu_item_title: 'Menu two',
        footer_menu_item_link: '/',
    },
    {
        id: 2,
        footer_menu_item_title: 'Menu three',
        footer_menu_item_link: '/',
    },
    {
        id: 3,
        footer_menu_item_title: 'Menu four',
        footer_menu_item_link: '/',
    },
]

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
export default function FooterMenuComponent() {
    return (
        <>
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column nowrap', md: 'row' },
                    flexWrap: 'nowrap',
                    flexFlow: { xs: 'column nowrap', md: 'row nowrap' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    height: 'auto',
                    width: '100%',
                    margin: '3vh auto',
                    padding: '0 !important',
                    background: 'none',
                    backgroundColor: 'transparent',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        alignSelf: 'flex-start',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        height: 'auto',
                        width: '100%',
                        maxWidth: { xs: '100%', md: '40%' },
                        margin: { xs: '3vh 3vw 0 3vw', md: '3vh 0 0 0' },
                        padding: '0',
                        gap: '0',
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'nowrap',
                            flexFlow: 'row nowrap',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                            height: 'auto',
                            width: '50%',
                            margin: '0',
                            padding: '0',
                            gap: '0',
                        }}
                    >
                        <BrandMenuComponentItemComponent
                            app_title={appInfo?.app_title}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        alignSelf: 'flex-start',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        height: 'auto',
                        width: '100%',
                        maxWidth: { xs: '100%', md: '20%' },
                        margin: { xs: '3vh 3vw 0 3vw', md: '3vh 0 0 0' },
                        padding: '0',
                        gap: '0',
                    }}
                >
                    <Typography
                        sx={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            height: 'auto',
                            width: '100%',
                            margin: '0',
                            padding: '0',
                        }}
                        variant="h6"
                        component="div"
                    >
                        Text only
                    </Typography>
                    <List
                        sx={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            height: 'auto',
                            width: '100%',
                            margin: '0',
                            padding: '0',
                            gap: '0',
                        }}
                        dense={true}
                    >
                        {footerMenuOne.map((data) => (
                            <FooterMenuComponentItem
                                key={data?.id}
                                footer_menu_item_title={
                                    data?.footer_menu_item_title
                                }
                                footer_menu_item_link={
                                    data?.footer_menu_item_link
                                }
                            />
                        ))}
                    </List>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        alignSelf: 'flex-start',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        height: 'auto',
                        width: '100%',
                        maxWidth: { xs: '100%', md: '20%' },
                        margin: { xs: '3vh 3vw 0 3vw', md: '3vh 0 0 0' },
                        padding: '0',
                        gap: '0',
                    }}
                >
                    <Typography
                        sx={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            height: 'auto',
                            width: '100%',
                            margin: '0',
                            padding: '0',
                        }}
                        variant="h6"
                        component="div"
                    >
                        Text only
                    </Typography>
                    <List
                        sx={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            height: 'auto',
                            width: '100%',
                            margin: '0',
                            padding: '0',
                            gap: '0',
                        }}
                        dense={true}
                    >
                        {footerMenuTwo.map((data) => (
                            <FooterMenuComponentItem
                                key={data?.id}
                                footer_menu_item_title={
                                    data?.footer_menu_item_title
                                }
                                footer_menu_item_link={
                                    data?.footer_menu_item_link
                                }
                            />
                        ))}
                    </List>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        alignSelf: 'flex-start',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        height: 'auto',
                        width: '100%',
                        maxWidth: { xs: '100%', md: '20%' },
                        margin: { xs: '3vh 3vw 0 3vw', md: '3vh 0 0 0' },
                        padding: '0',
                        gap: '0',
                    }}
                >
                    <Typography
                        sx={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            height: 'auto',
                            width: '100%',
                            margin: '0',
                            padding: '0',
                        }}
                        variant="h6"
                        component="div"
                    >
                        Text only
                    </Typography>
                    <List
                        sx={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            height: 'auto',
                            width: '100%',
                            margin: '0',
                            padding: '0',
                            gap: '0',
                        }}
                        dense={true}
                    >
                        {footerMenuThree.map((data) => (
                            <FooterMenuComponentItem
                                key={data?.id}
                                footer_menu_item_title={
                                    data?.footer_menu_item_title
                                }
                                footer_menu_item_link={
                                    data?.footer_menu_item_link
                                }
                            />
                        ))}
                    </List>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        alignSelf: 'flex-start',
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        height: 'auto',
                        width: '100%',
                        maxWidth: { xs: '100%', md: '20%' },
                        margin: { xs: '3vh 3vw 0 3vw', md: '3vh 0 0 0' },
                        padding: '0',
                        gap: '0',
                    }}
                >
                    <Typography
                        sx={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            height: 'auto',
                            width: '100%',
                            margin: '0',
                            padding: '0',
                        }}
                        variant="h6"
                        component="div"
                    >
                        Text only
                    </Typography>
                    <List
                        sx={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            height: 'auto',
                            width: '100%',
                            margin: '0',
                            padding: '0',
                        }}
                        dense={true}
                    >
                        {footerMenuFour.map((data) => (
                            <FooterMenuComponentItem
                                key={data?.id}
                                footer_menu_item_title={
                                    data?.footer_menu_item_title
                                }
                                footer_menu_item_link={
                                    data?.footer_menu_item_link
                                }
                            />
                        ))}
                    </List>
                </Box>
            </Container>
        </>
    )
}

// System -%- ////

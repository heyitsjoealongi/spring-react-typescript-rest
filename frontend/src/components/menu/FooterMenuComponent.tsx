// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'

// Components -%- ////
import { ReactComponent as SpringReactTypeScriptREST } from '../../assets/svg/spring-react-typescript-rest.svg'
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
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={4}>
                        <Box
                            sx={{
                                flex: 1,
                                alignSelf: 'center',
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'nowrap',
                                flexFlow: 'row nowrap',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                alignContent: 'center',
                                height: 'auto',
                                width: '50%',
                                margin: '0',
                                padding: '0',
                                gap: '0',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flex: 0,
                                    alignSelf: 'center',
                                }}
                            >
                                <SpringReactTypeScriptREST />
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mt: 0.4,
                                    display: 'flex',
                                    fontWeight: 700,
                                    color: '#212121',
                                    textDecoration: 'none',
                                }}
                            >
                                {appInfo?.app_title
                                    ? appInfo?.app_title
                                    : process.env.REACT_APP_DEFAULT_APP_TITLE}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={2}>
                        <Typography
                            sx={{ mt: 4, mb: 2 }}
                            variant="h6"
                            component="div"
                        >
                            Text only
                        </Typography>
                        <List dense={true}>
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
                    </Grid>
                    <Grid xs={12} md={2}>
                        <Typography
                            sx={{ mt: 4, mb: 2 }}
                            variant="h6"
                            component="div"
                        >
                            Text only
                        </Typography>
                        <List dense={true}>
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
                    </Grid>
                    <Grid xs={12} md={2}>
                        <Typography
                            sx={{ mt: 4, mb: 2 }}
                            variant="h6"
                            component="div"
                        >
                            Text only
                        </Typography>
                        <List dense={true}>
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
                    </Grid>
                    <Grid xs={12} md={2}>
                        <Typography
                            sx={{ mt: 4, mb: 2 }}
                            variant="h6"
                            component="div"
                        >
                            Text only
                        </Typography>
                        <List dense={true}>
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
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

// System -%- ////

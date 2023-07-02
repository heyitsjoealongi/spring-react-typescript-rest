// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { default as dayjs } from 'dayjs'

// MUI -%- ////
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'

// Components -%- ////
import FooterMenuComponentItem from './items/FooterMenuComponentItem'

// Integrations -%- ////
const appInfo = {
    app_title: 'Spring React TypeScript REST',
    app_description:
        'Fullstack Application — React (TypeScript) Frontend, Spring Boot Java Backend, OkHttp Client, and MySQL (Vitess) Service.',
}
const footerMenuOne = {
    menu_title: 'Menu title',
    menu_items: [
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
    ],
}
const footerMenuTwo = {
    menu_title: 'Menu title',
    menu_items: [
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
    ],
}
const footerMenuThree = {
    menu_title: 'Menu title',
    menu_items: [
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
    ],
}
const footerMenuFour = {
    menu_title: 'Menu title',
    menu_items: [
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
    ],
}

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
const year = dayjs().year()
export default function FooterMenuComponent() {
    return (
        <React.Fragment>
            <Divider light />
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
                        maxWidth: { xs: '90%', md: '20%' },
                        margin: { xs: '3vh 3vw 0 3vw', md: '3vh 0 0 0' },
                        padding: { xs: '0', md: '0 1.5vw' },
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
                        component="div"
                        variant="body2"
                        gutterBottom
                    >
                        © {year}{' '}
                        {appInfo?.app_title
                            ? appInfo?.app_title
                            : process.env.REACT_APP_DEFAULT_APP_TITLE}
                    </Typography>
                    <Typography
                        sx={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            height: 'auto',
                            width: '100%',
                            margin: '0',
                            padding: '0',
                        }}
                        component="div"
                        variant="caption"
                        gutterBottom
                    >
                        {appInfo?.app_description
                            ? appInfo?.app_description
                            : process.env.REACT_APP_DEFAULT_APP_DESCRIPTION}
                    </Typography>
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
                        maxWidth: { xs: '90%', md: '20%' },
                        margin: { xs: '3vh 3vw 0 3vw', md: '3vh 0 0 0' },
                        padding: { xs: '0', md: '0 1.5vw' },
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
                            color: '#616161',
                            textTransform: 'uppercase',
                        }}
                        variant="subtitle2"
                        gutterBottom
                    >
                        {footerMenuOne?.menu_title
                            ? footerMenuOne?.menu_title
                            : process.env.REACT_APP_DEFAULT_MENU_TITLE}
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
                        {footerMenuOne?.['menu_items']?.map((data) => (
                            <FooterMenuComponentItem
                                key={data?.['id']}
                                footer_menu_item_title={
                                    data?.['footer_menu_item_title']
                                }
                                footer_menu_item_link={
                                    data?.['footer_menu_item_link']
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
                        maxWidth: { xs: '90%', md: '20%' },
                        margin: { xs: '3vh 3vw 0 3vw', md: '3vh 0 0 0' },
                        padding: { xs: '0', md: '0 1.5vw' },
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
                            color: '#616161',
                            textTransform: 'uppercase',
                        }}
                        variant="subtitle2"
                        gutterBottom
                    >
                        {footerMenuTwo?.menu_title
                            ? footerMenuTwo?.menu_title
                            : process.env.REACT_APP_DEFAULT_MENU_TITLE}
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
                        {footerMenuTwo?.['menu_items']?.map((data) => (
                            <FooterMenuComponentItem
                                key={data?.['id']}
                                footer_menu_item_title={
                                    data?.['footer_menu_item_title']
                                }
                                footer_menu_item_link={
                                    data?.['footer_menu_item_link']
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
                        maxWidth: { xs: '90%', md: '20%' },
                        margin: { xs: '3vh 3vw 0 3vw', md: '3vh 0 0 0' },
                        padding: { xs: '0', md: '0 1.5vw' },
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
                            color: '#616161',
                            textTransform: 'uppercase',
                        }}
                        variant="subtitle2"
                        gutterBottom
                    >
                        {footerMenuThree?.menu_title
                            ? footerMenuThree?.menu_title
                            : process.env.REACT_APP_DEFAULT_MENU_TITLE}
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
                        {footerMenuThree?.['menu_items']?.map((data) => (
                            <FooterMenuComponentItem
                                key={data?.['id']}
                                footer_menu_item_title={
                                    data?.['footer_menu_item_title']
                                }
                                footer_menu_item_link={
                                    data?.['footer_menu_item_link']
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
                        maxWidth: { xs: '90%', md: '20%' },
                        margin: { xs: '3vh 3vw 0 3vw', md: '3vh 0 0 0' },
                        padding: { xs: '0', md: '0 1.5vw' },
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
                            color: '#616161',
                            textTransform: 'uppercase',
                        }}
                        variant="subtitle2"
                        gutterBottom
                    >
                        {footerMenuFour?.menu_title
                            ? footerMenuFour?.menu_title
                            : process.env.REACT_APP_DEFAULT_MENU_TITLE}
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
                        {footerMenuFour?.['menu_items']?.map((data) => (
                            <FooterMenuComponentItem
                                key={data?.['id']}
                                footer_menu_item_title={
                                    data?.['footer_menu_item_title']
                                }
                                footer_menu_item_link={
                                    data?.['footer_menu_item_link']
                                }
                            />
                        ))}
                    </List>
                </Box>
            </Container>
        </React.Fragment>
    )
}

// System -%- ////

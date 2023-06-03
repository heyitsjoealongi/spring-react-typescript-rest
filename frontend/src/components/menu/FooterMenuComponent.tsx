// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { default as dayjs } from 'dayjs'
import { Link } from 'react-router-dom'

// Types -%- ////

// MUI -%- ////
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

// System Components -%- ////
import FooterMenuComponentItem from './items/FooterMenuComponentItem'
import PreFooterFrameworksMenuComponent from './PreFooterFrameworksMenuComponent'

// Components -%- ////

// Middleware & Integrations -%- ////
const appInfo = {
    app_title: process.env.REACT_APP_DEFAULT_APP_TITLE,
    app_description: process.env.REACT_APP_DEFAULT_APP_DESCRIPTION,
}
const footerMenuOne = {
    menu_title: 'Application',
    menu_items: [
        {
            footer_menu_item_id: 0,
            footer_menu_item_title: 'Home',
            footer_menu_item_link: '/',
        },
        {
            footer_menu_item_id: 1,
            footer_menu_item_title: 'Articles',
            footer_menu_item_link: '/articles',
        },
        {
            footer_menu_item_id: 2,
            footer_menu_item_title: 'Topics',
            footer_menu_item_link: '/topics',
        },
        {
            footer_menu_item_id: 3,
            footer_menu_item_title: 'Stats',
            footer_menu_item_link: '/',
        },
    ],
}
const footerMenuTwo = {
    menu_title: 'Topics',
    menu_items: [
        {
            footer_menu_item_id: 0,
            footer_menu_item_title: 'Cloud',
            footer_menu_item_link: '/',
        },
        {
            footer_menu_item_id: 1,
            footer_menu_item_title: 'Java',
            footer_menu_item_link: '/',
        },
        {
            footer_menu_item_id: 2,
            footer_menu_item_title: 'JavaScript',
            footer_menu_item_link: '/',
        },
        {
            footer_menu_item_id: 3,
            footer_menu_item_title: 'Database',
            footer_menu_item_link: '/',
        },
    ],
}
const footerMenuThree = {
    menu_title: 'Analytics',
    menu_items: [
        {
            footer_menu_item_id: 0,
            footer_menu_item_title: 'Views',
            footer_menu_item_link: '/',
        },
        {
            footer_menu_item_id: 1,
            footer_menu_item_title: 'Reads',
            footer_menu_item_link: '/',
        },
        {
            footer_menu_item_id: 2,
            footer_menu_item_title: 'Origin',
            footer_menu_item_link: '/',
        },
        {
            footer_menu_item_id: 3,
            footer_menu_item_title: 'Activity',
            footer_menu_item_link: '/',
        },
    ],
}
const footerMenuFour = {
    menu_title: 'About',
    menu_items: [
        {
            footer_menu_item_id: 0,
            footer_menu_item_title: 'Story',
            footer_menu_item_link: '/',
        },
        {
            footer_menu_item_id: 1,
            footer_menu_item_title: 'Experience',
            footer_menu_item_link: '/',
        },
        {
            footer_menu_item_id: 2,
            footer_menu_item_title: 'Architecture',
            footer_menu_item_link: '/',
        },
        {
            footer_menu_item_id: 3,
            footer_menu_item_title: 'Code',
            footer_menu_item_link: '/',
        },
    ],
}

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
const year = dayjs().year()
export default function FooterMenuComponent() {
    return (
        <React.Fragment>
            <Divider light />
            <PreFooterFrameworksMenuComponent />
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
                    <Box
                        maxWidth="xl"
                        sx={{
                            flex: 1,
                            alignSelf: 'flex-start',
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'nowrap',
                            flexFlow: 'row nowrap',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            alignContent: 'flex-start',
                            height: 'auto',
                            width: '100%',
                            gap: '0.3vw',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'inline-flex',
                                order: '0',
                                flex: '0',
                                alignSelf: 'flex-start',
                                height: 'auto',
                                width: 'auto',
                                margin: '0.3vh 0.3vw 0 0.3vh',
                                padding: '0',
                            }}
                        >
                            <Link
                                to={'https://twitter.com/'}
                                target="_blank"
                                aria-label="twitter-icon-link"
                                type="link"
                            >
                                <TwitterIcon
                                    sx={{
                                        height: '0.9em',
                                        width: 'auto',
                                    }}
                                />
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                display: 'inline-flex',
                                order: '1',
                                flex: '0',
                                alignSelf: 'flex-start',
                                height: 'auto',
                                width: 'auto',
                                margin: '0.3vh 0.3vw',
                                padding: '0',
                            }}
                        >
                            <Link
                                to={'https://www.linkedin.com/'}
                                target="_blank"
                                aria-label="linkedin-icon-link"
                                type="link"
                            >
                                <LinkedInIcon
                                    sx={{
                                        height: '0.9em',
                                        width: 'auto',
                                    }}
                                />
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                display: 'inline-flex',
                                order: '2',
                                flex: '0',
                                alignSelf: 'flex-start',
                                height: 'auto',
                                width: 'auto',
                                margin: '0.3vh 0.3vw',
                                padding: '0',
                            }}
                        >
                            <Link
                                to={'https://www.linkedin.com/'}
                                target="_blank"
                                aria-label="linkedin-icon-link"
                                type="link"
                            >
                                <GitHubIcon
                                    sx={{
                                        height: '0.9em',
                                        width: 'auto',
                                    }}
                                />
                            </Link>
                        </Box>
                    </Box>
                    <Typography
                        sx={{
                            display: 'inline-flex',
                            flex: 1,
                            alignSelf: 'flex-start',
                            height: 'auto',
                            width: 'auto',
                            margin: '0',
                            padding: '0',
                        }}
                        component="div"
                        variant="body2"
                        gutterBottom
                    >
                        © {year} {appInfo?.app_title}
                    </Typography>
                    <Typography
                        sx={{
                            display: 'inline-flex',
                            flex: 1,
                            alignSelf: 'flex-start',
                            height: 'auto',
                            width: '100%',
                            margin: '1.5vh auto',
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
                    <Typography
                        sx={{
                            display: 'inline-flex',
                            flex: 1,
                            alignSelf: 'flex-start',
                            height: 'auto',
                            width: '100%',
                            margin: '0 0 1.5vh 0',
                            padding: '0',
                            textTransform: 'uppercase',
                            fontSize: '12px',
                            fontWeight: '600',
                        }}
                        component="div"
                        gutterBottom
                    >
                        <Link
                            to={'/privacy'}
                            target="_blank"
                            aria-label="linkedin-icon-link"
                            type="link"
                        >
                            Privacy Policy
                        </Link>
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
                        {footerMenuOne?.['menu_items']?.map(
                            ({
                                footer_menu_item_id,
                                footer_menu_item_title,
                                footer_menu_item_link,
                            }) => (
                                <FooterMenuComponentItem
                                    key={footer_menu_item_id}
                                    footer_menu_item_title={
                                        footer_menu_item_title
                                    }
                                    footer_menu_item_link={
                                        footer_menu_item_link
                                    }
                                />
                            )
                        )}
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
                        {footerMenuTwo?.['menu_items']?.map(
                            ({
                                footer_menu_item_id,
                                footer_menu_item_title,
                                footer_menu_item_link,
                            }) => (
                                <FooterMenuComponentItem
                                    key={footer_menu_item_id}
                                    footer_menu_item_title={
                                        footer_menu_item_title
                                    }
                                    footer_menu_item_link={
                                        footer_menu_item_link
                                    }
                                />
                            )
                        )}
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
                        {footerMenuThree?.['menu_items']?.map(
                            ({
                                footer_menu_item_id,
                                footer_menu_item_title,
                                footer_menu_item_link,
                            }) => (
                                <FooterMenuComponentItem
                                    key={footer_menu_item_id}
                                    footer_menu_item_title={
                                        footer_menu_item_title
                                    }
                                    footer_menu_item_link={
                                        footer_menu_item_link
                                    }
                                />
                            )
                        )}
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
                        {footerMenuFour?.['menu_items']?.map(
                            ({
                                footer_menu_item_id,
                                footer_menu_item_title,
                                footer_menu_item_link,
                            }) => (
                                <FooterMenuComponentItem
                                    key={footer_menu_item_id}
                                    footer_menu_item_title={
                                        footer_menu_item_title
                                    }
                                    footer_menu_item_link={
                                        footer_menu_item_link
                                    }
                                />
                            )
                        )}
                    </List>
                </Box>
            </Container>
        </React.Fragment>
    )
}

// System -%- ////

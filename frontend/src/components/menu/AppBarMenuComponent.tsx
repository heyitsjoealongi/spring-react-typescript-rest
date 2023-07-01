// Documentation - https://mui.com/material-ui/react-app-bar/

// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useNavigate } from 'react-router-dom'

// MUI -%- ////
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'

// Components -%- ////
import BrandMenuComponentItemComponent from './items/BrandMenuComponentItem'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
type AppBarMenuComponentProps = {
    app_title: string
    app_menu: {
        id: number
        app_menu_title: string
        app_menu_link: string
    }[]
    user_menu: {
        id: number
        user_menu_title: string
        user_menu_link: string
    }[]
}

export default function AppBarMenuComponent(props: AppBarMenuComponentProps) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )
    const [anchorElNotification, setAnchorElNotification] =
        React.useState<null | HTMLElement>(null)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    )
    const navigate = useNavigate()
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleCloseNavMenu = (app_menu_link_item_link: string) => {
        setAnchorElNav(null)
        if (typeof app_menu_link_item_link === 'string') {
            navigate(`${app_menu_link_item_link}`)
        }
    }
    const handleOpenNotificationMenu = (
        event: React.MouseEvent<HTMLElement>
    ) => {
        setAnchorElNotification(event.currentTarget)
    }
    const handleCloseNotificationMenu = () => {
        setAnchorElNotification(null)
    }
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <AppBar
            position="static"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                flexFlow: 'row nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                height: 'auto',
                width: '100%',
                margin: '0 !important',
                padding: '0 !important',
                background: 'none',
                backgroundColor: 'transparent',
                boxShadow: 'none',
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    height: 'auto',
                    width: '100%',
                    margin: '0 !important',
                    padding: '0 !important',
                }}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        height: 'auto',
                        width: '100%',
                        margin: '0 !important',
                        padding: '0 !important',
                    }}
                >
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
                                display: { xs: 'flex', md: 'none' },
                                flex: 0,
                                alignSelf: 'center',
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="application menu"
                                aria-controls="application-menu"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{ color: '#212121' }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="application-menu"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {props?.app_menu.map((data) => (
                                    <MenuItem
                                        key={data?.id}
                                        onClick={() =>
                                            handleCloseNavMenu(
                                                data?.app_menu_link
                                            )
                                        }
                                    >
                                        <Typography textAlign="center">
                                            {data?.app_menu_title}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <BrandMenuComponentItemComponent
                            app_title={props?.app_title}
                        />
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            alignSelf: 'center',
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'nowrap',
                            flexFlow: 'row nowrap',
                            justifyContent: 'flex-end',
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
                            <Tooltip title="User Notifications">
                                <IconButton
                                    size="large"
                                    aria-label="notification menu"
                                    aria-controls="notification-menu"
                                    aria-haspopup="true"
                                    onClick={handleOpenNotificationMenu}
                                    sx={{ color: '#212121' }}
                                >
                                    <CircleNotificationsIcon />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '60px' }}
                                id="notification-menu"
                                anchorEl={anchorElNotification}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElNotification)}
                                onClose={handleCloseNotificationMenu}
                            >
                                {props?.user_menu.map((data) => (
                                    <MenuItem
                                        key={data?.id}
                                        onClick={() =>
                                            handleCloseNavMenu(
                                                data?.user_menu_link
                                            )
                                        }
                                    >
                                        <Typography textAlign="center">
                                            {data?.user_menu_title}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flex: 0,
                                alignSelf: 'center',
                            }}
                        >
                            <Tooltip title="User Settings">
                                <IconButton
                                    size="large"
                                    aria-label="application menu"
                                    aria-controls="application-menu"
                                    aria-haspopup="true"
                                    onClick={handleOpenUserMenu}
                                    sx={{ color: '#212121' }}
                                >
                                    <AccountCircleIcon />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '60px' }}
                                id="application-menu"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {props?.user_menu.map((data) => (
                                    <MenuItem
                                        key={data?.id}
                                        onClick={() =>
                                            handleCloseNavMenu(
                                                data?.user_menu_link
                                            )
                                        }
                                    >
                                        <Typography textAlign="center">
                                            {data?.user_menu_title}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

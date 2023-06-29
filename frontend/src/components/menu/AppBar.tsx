// Documentation - https://mui.com/material-ui/react-app-bar/

// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useNavigate } from 'react-router-dom'

// Components -%- ////
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { ReactComponent as SpringReactTypeScriptREST } from '../../assets/svg/spring-react-typescript-rest.svg'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
type AppBarProps = {
    app_bar_title: string
    app_bar_menu: {
        id: number
        basic_menu_title: string
        basic_menu_link: string
    }[]
    app_bar_user_menu: {
        id: number
        user_menu_title: string
        user_menu_link: string
    }[]
}

export default function ResponsiveAppBar(props: AppBarProps) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    )
    const navigate = useNavigate()
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseNavMenu = (basic_item_link: string) => {
        setAnchorElNav(null)
        if (typeof(basic_item_link) === 'string') {
            navigate(`${basic_item_link}`)
        }
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
                margin: '0 auto',
                padding: '0',
                background: 'none',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderStyle: 'none none solid none',
                borderWidth: '3px',
                borderColor: '#BDBDBD',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
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
                                display: { xs: 'flex', md: 'none' }, flex: 0, alignSelf: 'center' 
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{ color: '#BDBDBD' }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
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
                                {props?.app_bar_menu.map((data) => (
                                    <MenuItem
                                        key={data?.id}
                                        onClick={() =>
                                            handleCloseNavMenu(
                                                data?.basic_menu_link
                                            )
                                        }
                                    >
                                        <Typography textAlign="center">
                                            {data?.basic_menu_title}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ display: 'flex', flex: 0, alignSelf: 'center' }}>
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
                            {props?.app_bar_title
                                ? props?.app_bar_title
                                : 'Basic Menu'}
                        </Typography>

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
                        }}>
                        <Box 
                            sx={{ 
                                display: 'flex', 
                                flex: 0, 
                                alignSelf: 'center' 
                            }}
                        >
                            <Tooltip title="User Settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0, color: '#BDBDBD' }}
                                >
                                    <Avatar
                                        alt="Frontend"
                                        src="/spring-react-typescript-rest-user.png"
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '60px' }}
                                id="menu-appbar"
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
                                {props?.app_bar_user_menu.map((data) => (
                                    <MenuItem
                                        key={data?.id}
                                        onClick={() =>
                                            handleCloseNavMenu(data?.user_menu_link)
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

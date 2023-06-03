// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { notificationsState } from '../../recoil/atoms/notificationsAtom'
import { authenticatedState } from '../../recoil/atoms/authenticatedAtom'

// Types -%- ////
import { AppMenusT, AppMenuT } from '../../types/menu'

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
import Divider from '@mui/material/Divider'
import Badge from '@mui/material/Badge'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications'

// System Components -%- ////
import BrandMenuComponentItemComponent from './items/BrandMenuComponentItem'
import NotificationMenuComponent from './NotificationMenuComponent'

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function AppBarMenuComponent({
    app_title,
    app_menu,
    user_menu,
}: AppMenusT) {
    const notifications = useRecoilValue(notificationsState)
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    )
    const [anchorElNotification, setAnchorElNotification] =
        React.useState<null | HTMLElement>(null)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    )
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
        if (notifications?.length > 0) {
            setAnchorElNotification(event.currentTarget)
        }
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
        <React.Fragment>
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
                                    {app_menu?.map(
                                        ({
                                            id,
                                            app_menu_link,
                                            app_menu_title,
                                        }: AppMenuT) => (
                                            <MenuItem
                                                key={id}
                                                onClick={() =>
                                                    handleCloseNavMenu(
                                                        app_menu_link
                                                    )
                                                }
                                            >
                                                <Typography textAlign="center">
                                                    {app_menu_title}
                                                </Typography>
                                            </MenuItem>
                                        )
                                    )}
                                </Menu>
                            </Box>
                            <BrandMenuComponentItemComponent
                                app_title={app_title}
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
                                        {notifications?.length > 0 ? (
                                            <Badge
                                                color="secondary"
                                                variant="dot"
                                                badgeContent=""
                                            >
                                                <CircleNotificationsIcon />
                                            </Badge>
                                        ) : (
                                            <CircleNotificationsIcon />
                                        )}
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
                                    <NotificationMenuComponent
                                        notifications={notifications}
                                    />
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
                                    {useRecoilValue(authenticatedState)
                                        ? user_menu?.['authenticated']?.map(
                                              (data: object) => (
                                                  <MenuItem
                                                      key={data?.['id']}
                                                      onClick={() =>
                                                          handleCloseNavMenu(
                                                              data?.[
                                                                  'user_menu_link'
                                                              ]
                                                          )
                                                      }
                                                  >
                                                      <Typography textAlign="center">
                                                          {
                                                              data?.[
                                                                  'user_menu_title'
                                                              ]
                                                          }
                                                      </Typography>
                                                  </MenuItem>
                                              )
                                          )
                                        : user_menu?.['unauthenticated']?.map(
                                              (data: object) => (
                                                  <MenuItem
                                                      key={data?.['id']}
                                                      onClick={() =>
                                                          handleCloseNavMenu(
                                                              data?.[
                                                                  'user_menu_link'
                                                              ]
                                                          )
                                                      }
                                                  >
                                                      <Typography textAlign="center">
                                                          {
                                                              data?.[
                                                                  'user_menu_title'
                                                              ]
                                                          }
                                                      </Typography>
                                                  </MenuItem>
                                              )
                                          )}
                                </Menu>
                            </Box>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Divider light />
        </React.Fragment>
    )
}

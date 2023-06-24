// Documentation - https://mui.com/material-ui/react-app-bar/

// React -%- ////
import * as React from 'react';

// Packages -%- ////
import { useNavigate } from "react-router-dom";

// Components -%- ////
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import { ReactComponent as SpringReactTypeScriptREST } from '../../assets/svg/spring-react-typescript-rest.svg';

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
type AppBarProps = {
  app_bar_title: string;
  app_bar_menu: {
    id: number;
    basic_menu_title: string;
    basic_menu_link: string;
  }[];
  app_bar_user_menu:{
    id: number;
    user_menu_title: string;
    user_menu_link: string;
  }[];
};

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar(props: AppBarProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = (basic_item_link: string) => {
    setAnchorElNav(null);
    if(basic_item_link){
      navigate(`${basic_item_link}`);
    }
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static"
      sx={{
        background:'none',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderStyle:'none none solid none',
        borderWidth: "3px",
        borderColor:"#BDBDBD",
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <SpringReactTypeScriptREST />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mt:.4,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: '#212121',
              textDecoration: 'none',
            }}
          >
            {props?.app_bar_title ? props?.app_bar_title : "Basic Menu"}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color: '#BDBDBD'}}
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
                <MenuItem key={data?.id} onClick={() => handleCloseNavMenu(data?.basic_menu_link)}>
                  <Typography textAlign="center">{data?.basic_menu_title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
          <SpringReactTypeScriptREST />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mt:.4,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 600,
              color: '#212121',
              textDecoration: 'none',
            }}
          >
            {props?.app_bar_title ? props?.app_bar_title : "Basic Menu"}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {props?.app_bar_menu.map((data) => (
              <Button
                key={data?.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {data?.basic_menu_title ? data?.basic_menu_title : ""}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: '#BDBDBD' }}>
                <Avatar alt="Frontend" src="http://localhost:3000/spring-react-typescript-rest-user.png" />
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
                <MenuItem key={data?.id} onClick={() => handleCloseNavMenu(data?.user_menu_link)}>
                  <Typography textAlign="center">{data?.user_menu_title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
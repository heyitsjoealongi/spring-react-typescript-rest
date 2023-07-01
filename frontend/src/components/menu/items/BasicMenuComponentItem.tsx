// Documentation - https://mui.com/material-ui/react-menu/

// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useNavigate } from 'react-router-dom'

// Components -%- ////
import Button from '@mui/material/Button'
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
type BasicMenuComponentItemProps = {
    basic_menu_title: string
    basic_item_link: string
}

export default function BasicMenuComponentItem(props: BasicMenuComponentItemProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const navigate = useNavigate()
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
        if (props?.basic_item_link) {
            navigate(`${props?.basic_item_link}`)
        }
    }
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    color: '#757575',
                }}
            >
                {props?.basic_menu_title
                    ? props?.basic_menu_title
                    : 'Basic Menu'}
            </Button>
            {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}
        </div>
    )
}

// System -%- ////

// Documentation - https://mui.com/material-ui/react-menu/

// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useNavigate } from 'react-router-dom'

// MUI -%- ////
import Button from '@mui/material/Button'

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
type AppMenuComponentItemProps = {
    app_menu_title: string
    app_menu_link_item_link: string
}

export default function AppMenuComponentItem(props: AppMenuComponentItemProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const navigate = useNavigate()
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
        if (props?.app_menu_link_item_link) {
            navigate(`${props?.app_menu_link_item_link}`)
        }
    }

    return (
        <>
            <Button
                id="app-menu-component-item"
                aria-controls={open ? 'app-menu-component-item' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    color: '#757575',
                }}
            >
                {props?.app_menu_title
                    ? props?.app_menu_title
                    : process.env.REACT_APP_DEFAULT_MENU_TITLE}
            </Button>
        </>
    )
}

// System -%- ////

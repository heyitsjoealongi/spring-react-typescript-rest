// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useNavigate } from 'react-router-dom'

// Types -%- ////
import { AppMenuComponentT } from '../../../types/menu'

// MUI -%- ////
import Button from '@mui/material/Button'

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function AppMenuComponentItem({
    app_menu_link_item_link,
    app_menu_title,
}: AppMenuComponentT) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const navigate = useNavigate()
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
        if (app_menu_link_item_link) {
            navigate(app_menu_link_item_link)
        }
    }
    return (
        <React.Fragment>
            <Button
                id="app-menu-component-item"
                aria-controls={open ? 'app-menu-component-item' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    color: '#212121',
                    '&:hover': {
                        color: '#F5F5F5',
                        background: '#757575',
                    },
                }}
            >
                {app_menu_title}
            </Button>
        </React.Fragment>
    )
}

// System -%- ////

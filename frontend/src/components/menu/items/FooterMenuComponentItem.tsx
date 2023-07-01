// Documentation - https://mui.com/material-ui/react-menu/

// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { Link } from 'react-router-dom'

// MUI -%- ////
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
type FooterMenuComponentItemProps = {
    footer_menu_item_title: string
    footer_menu_item_link: string
}

export default function FooterMenuComponentItem(
    props: FooterMenuComponentItemProps
) {
    return (
        <>
            <Link to={props?.footer_menu_item_link}>
                <ListItem id="footer-menu-component-item">
                    <ListItemText
                        primary={
                            props?.footer_menu_item_title
                                ? props?.footer_menu_item_title
                                : process.env.REACT_APP_DEFAULT_MENU_TITLE
                        }
                        secondary={null}
                        sx={{
                            color: '#757575',
                        }}
                    />
                </ListItem>
            </Link>
        </>
    )
}

// System -%- ////

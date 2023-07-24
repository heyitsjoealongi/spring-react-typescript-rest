// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { Link } from 'react-router-dom'

// MUI -%- ////
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
type FooterMenuComponentItemProps = {
    footer_menu_item_title: string
    footer_menu_item_link: string
}
export default function FooterMenuComponentItem(
    props: FooterMenuComponentItemProps
) {
    return (
        <React.Fragment>
            <ListItem
                id="footer-menu-component-item"
                sx={{
                    height: 'auto',
                    width: '100%',
                    margin: '0',
                    padding: '0',
                    gap: '0',
                    color: '#757575',
                }}
            >
                <Link to={props?.['footer_menu_item_link']}>
                    <ListItemText
                        primary={
                            props?.['footer_menu_item_title']
                                ? props?.['footer_menu_item_title']
                                : process.env.REACT_APP_DEFAULT_MENU_TITLE
                        }
                        secondary={null}
                        sx={{
                            height: 'auto',
                            width: '100%',
                            margin: '0.3vh 0 0 0',
                            padding: '0',
                            gap: '0',
                            color: '#212121',
                            '&:hover': {
                                color: '#757575',
                            },
                        }}
                    />
                </Link>
            </ListItem>
        </React.Fragment>
    )
}

// System -%- ////

// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { Link } from 'react-router-dom'

// Types -%- ////
import { FooterMenuComponentT } from '../../../types/menu'

// MUI -%- ////
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////

export default function FooterMenuComponentItem({
    footer_menu_item_link,
    footer_menu_item_title,
}: FooterMenuComponentT) {
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
                <Link to={footer_menu_item_link}>
                    <ListItemText
                        primary={footer_menu_item_title}
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

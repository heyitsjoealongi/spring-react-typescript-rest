// React -%- ////
import * as React from 'react'

// Packages -%- ////
// import { useNavigate } from 'react-router-dom'

// MUI -%- ////
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
// type NotificationMenuComponentItemProps = {
//     app_menu_title: string
//     app_menu_link_item_link: string
// }

export default function NotificationMenuComponentItem() {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary="01/01/2023"
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Welcome to Spring React TypeScript REST
                            </Typography>
                            {' — Sign up to stay up to date on the latest'}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

// System -%- ////

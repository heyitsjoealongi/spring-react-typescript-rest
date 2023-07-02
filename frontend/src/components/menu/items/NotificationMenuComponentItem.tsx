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
type NotificationMenuComponentItemProps = {
    app_notification_timestamp: string
    app_notification_title: string
    app_notification_subtitle: string
    app_notification_link: string
}

export default function NotificationMenuComponentItem(props: NotificationMenuComponentItemProps) {
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={props?.['app_notification_title']}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {props?.['app_notification_timestamp']}
                            </Typography>
                            {': '}{props?.['app_notification_subtitle']}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

// System -%- ////

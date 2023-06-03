// React -%- ////
import * as React from 'react'

// Packages -%- ////

// Types -%- ////
import { NotificationsT, NotificationT } from '../../types/menu'

// MUI -%- ////
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////

export default function NotificationMenuComponent({
    notifications,
}: NotificationsT) {
    return (
        <React.Fragment>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                }}
            >
                {notifications?.map(
                    ({
                        id,
                        app_notification_timestamp,
                        app_notification_title,
                        app_notification_subtitle,
                        app_notification_link,
                    }: NotificationT) => (
                        <React.Fragment key={id}>
                            <ListItem alignItems="flex-start">
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{
                                                    color: '#212121',
                                                }}
                                                variant="caption"
                                                gutterBottom
                                            >
                                                {app_notification_timestamp}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    color: '#212121',
                                                    fontWeight: '600',
                                                }}
                                                variant="subtitle2"
                                                gutterBottom
                                            >
                                                {app_notification_title}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{
                                                    color: '#212121',
                                                    fontWeight: '300',
                                                }}
                                                variant="subtitle2"
                                                gutterBottom
                                            >
                                                {app_notification_subtitle}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </React.Fragment>
                    )
                )}
            </List>
        </React.Fragment>
    )
}

// System -%- ////

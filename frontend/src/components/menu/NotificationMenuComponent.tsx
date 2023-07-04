// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

// System Components -%- ////

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
type NotificationMenuComponentProps = {
    notifications: {
        id: number
        app_notification_timestamp: string
        app_notification_title: string
        app_notification_subtitle: string
        app_notification_link: string
    }[]
}
export default function NotificationMenuComponent(
    props: NotificationMenuComponentProps
) {
    return (
        <React.Fragment>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                }}
            >
                {props?.['notifications']?.map((data) => (
                    <React.Fragment key={data?.['id']}>
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
                                            {
                                                data?.[
                                                    'app_notification_timestamp'
                                                ]
                                            }
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: '#212121',
                                                fontWeight: '600',
                                            }}
                                            variant="subtitle2"
                                            gutterBottom
                                        >
                                            {data?.['app_notification_title']}
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
                                            {
                                                data?.[
                                                    'app_notification_subtitle'
                                                ]
                                            }
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </React.Fragment>
                ))}
            </List>
        </React.Fragment>
    )
}

// System -%- ////

// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilValue } from 'recoil'
import { notificationsState } from '../../recoil/atoms/notificationsAtom'

// MUI -%- ////

// Components -%- ////
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
export default function NotificationMenuComponent() {
    const notifications = useRecoilValue(notificationsState)
    return (
        <React.Fragment>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                }}
            >
                {notifications?.map((data) => (
                    <React.Fragment key={data?.['id']}>
                        <ListItem alignItems="flex-start">
                            <ListItemText
                                primary={data?.['app_notification_title']}
                                secondary={
                                    data?.['app_notification_timestamp'] +
                                    ': ' +
                                    data?.['app_notification_subtitle']
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

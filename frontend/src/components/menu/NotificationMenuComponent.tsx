// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilValue } from 'recoil'
import { notificationState } from '../../recoil/atoms/notificationAtom'

// MUI -%- ////

// Components -%- ////
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

// Integrations -%- ////
const appNotifications = [
    {
        id: 0,
        app_notification_timestamp: '01/01/2023 - 12:00PM',
        app_notification_title: 'Notification one, of many notifications',
        app_notification_subtitle:
            'This is notification one, and some extra text',
        app_notification_link: '/',
    },
    {
        id: 1,
        app_notification_timestamp: '01/01/2023 - 12:00PM',
        app_notification_title: 'Notification two, of many notifications',
        app_notification_subtitle:
            'This is notification two, and some extra text',
        app_notification_link: '/',
    },
    {
        id: 2,
        app_notification_timestamp: '01/01/2023 - 12:00PM',
        app_notification_title: 'Notification three, of many notifications',
        app_notification_subtitle:
            'This is notification three, and some extra text',
        app_notification_link: '/',
    },
    {
        id: 3,
        app_notification_timestamp: '01/01/2023 - 12:00PM',
        app_notification_title: 'Notification four, of many notifications',
        app_notification_subtitle:
            'This is notification four, and some extra text',
        app_notification_link: '/',
    },
]


// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
// const createNotifications = (notification) => {
//     const notifications: object[] = [];

//     if (appNotifications?.length > 0) {
//         appNotifications?.forEach((data) => {
//             notifications.push(
//                 <React.Fragment>
//                     <ListItem alignItems="flex-start" key={data?.['id']}>
//                         <ListItemText
//                             primary={data?.['app_notification_title']}
//                             secondary={
//                                 data?.['app_notification_timestamp'] +
//                                 ': ' +
//                                 data?.['app_notification_subtitle']
//                             }
//                         />
//                     </ListItem>
//                     <Divider variant="inset" component="li" />
//                 </React.Fragment>
//             )
//         })
//     }

//     return notifications
// }

export default function NotificationMenuComponent() {
    const notification = useRecoilValue(notificationState)
    return (
        <React.Fragment>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                }}
            >
                {notification?.map((data) => (
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

// https://legacy.reactjs.org/docs/fragments.html#keyed-fragments

// notifications: {
//     id: number
//     app_notification_timestamp: string
//     app_notification_title: string
//     app_notification_subtitle: string
//     app_notification_link: string
// }[]

// Adding A Notification


// export default function NotificationUtilityComponent() {
//     const [notifications, setNotifications] = useRecoilState(notificationState)

//     useEffect(() => {
//         if (notifications?.length > 0) {
//             const current = [
//                 ...notifications,
//                 ...appNotifications,
//             ] as Array<object>
//             setNotifications(current as [])
//         } else {
//             const current = [...appNotifications] as Array<object>
//             setNotifications(current as [])
//         }
//         return () => {
//             notifications
//         }
//     }, [notifications])

//     return notifications
// }

// React -%- ////
import { useEffect } from 'react'

// Packages -%- ////
import { useRecoilState } from 'recoil'
import { notificationState } from '../../recoil/atoms/notificationAtom'

// MUI -%- ////

// Components -%- ////

// Integrations -%- ////
const appNotifications = [
    {
        id: 0,
        app_notification_timestamp: '01/01/2023 - 12:00PM',
        app_notification_title: 'Notification one, of many notifications',
        app_notification_subtitle: 'This is notification one, and some extra text',
        app_notification_link: '/',
    },
    {
        id: 1,
        app_notification_timestamp: '01/01/2023 - 12:00PM',
        app_notification_title: 'Notification two, of many notifications',
        app_notification_subtitle: 'This is notification two, and some extra text',
        app_notification_link: '/',
    },
    {
        id: 2,
        app_notification_timestamp: '01/01/2023 - 12:00PM',
        app_notification_title: 'Notification three, of many notifications',
        app_notification_subtitle: 'This is notification three, and some extra text',
        app_notification_link: '/',
    },
    {
        id: 3,
        app_notification_timestamp: '01/01/2023 - 12:00PM',
        app_notification_title: 'Notification four, of many notifications',
        app_notification_subtitle: 'This is notification four, and some extra text',
        app_notification_link: '/',
    },
]

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
export default function NotificationUtilityComponent() {
    const [notifications, setNotifications] = useRecoilState(notificationState)
    useEffect(() => {
        const current = [...notifications, ...appNotifications] as []
        setNotifications(current)
        return () => {
            notifications
        }
    }, [])

    return notifications
}

// System -%- ////

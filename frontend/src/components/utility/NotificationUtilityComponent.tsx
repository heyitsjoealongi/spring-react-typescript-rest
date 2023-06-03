// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilState } from 'recoil'
import { notificationsState } from '../../recoil/atoms/notificationsAtom'

// Types -%- ////

// MUI -%- ////

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
const constructNotifications = (notifications) => {
    const newNotification = {
        id: 0,
        app_notification_timestamp: '01/01/2023 - 12:00PM',
        app_notification_title: 'Notification one of many notifications',
        app_notification_subtitle:
            'This is notification one and some extra text',
        app_notification_link: '/',
    }
    if (notifications?.length > 0) {
        return [...notifications, newNotification]
    } else {
        return [newNotification]
    }
}
export default function NotificationUtilityComponent() {
    const [notifications, setNotifications] = useRecoilState(notificationsState)
    const constructedNotifications = constructNotifications(notifications)
    React.useEffect(() => {
        setNotifications(constructedNotifications)
        return () => {
            true
        }
    }, [])
    return true
}

// System -%- ////

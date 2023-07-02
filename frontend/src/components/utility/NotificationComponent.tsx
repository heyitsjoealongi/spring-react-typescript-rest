// React -%- ////
import { useEffect } from 'react'

// Packages -%- ////
import { useRecoilState } from 'recoil'
import { notificationState } from '../../recoil/atoms/notificationAtom'

// MUI -%- ////

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
export default function NotificationComponent() {
    const [notifications, setNotifications] = useRecoilState(notificationState)

    useEffect(() => {
        setNotifications([])
        return () => {
            notifications
        }
    }, [])

    return notifications
}

// System -%- ////

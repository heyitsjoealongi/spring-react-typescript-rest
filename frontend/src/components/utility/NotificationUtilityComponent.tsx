// React -%- ////
import * as React from 'react'

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
export default function NotificationUtilityComponent() {
    const [notification, setNotification] = useRecoilState(notificationState)

    React.useEffect(() => {
        setNotification([])
        return () => {
            notification
        }
    }, [])

    return notification
}

// System -%- ////

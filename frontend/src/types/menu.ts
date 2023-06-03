// React -%- ////

// Packages -%- ////

// Types -%- ////
export type AppMenusT = {
    app_title: string
    app_menu: {
        id: number
        app_menu_title: string
        app_menu_link: string
    }[]
    user_menu: {
        authenticated: Array<object>
        unauthenticated: Array<object>
        all: Array<object>
    }
}
export type AppMenuT = {
    id: number
    app_menu_title: string
    app_menu_link: string
}
export type AppMenuComponentT = {
    app_menu_title: string
    app_menu_link_item_link: string
}
export type NotificationsT = {
    notifications: {
        id: number
        app_notification_timestamp: string
        app_notification_title: string
        app_notification_subtitle: string
        app_notification_link: string
    }[]
}
export type NotificationT = {
    id: number
    app_notification_timestamp: string
    app_notification_title: string
    app_notification_subtitle: string
    app_notification_link: string
}
export type FooterMenuComponentT = {
    footer_menu_item_title: string
    footer_menu_item_link: string
}

// MUI -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////

// System -%- ////

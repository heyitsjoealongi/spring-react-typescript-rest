// React -%- ////

// Packages -%- ////

// Types -%- ////

// MUI -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
export const setUserDataKey = (userDataKey: string) => {
    return localStorage.setItem('userDataKey', JSON.stringify(userDataKey))
}
const getUserDataKey = () => {
    return JSON.parse(localStorage.getItem('userDataKey'))
}
export const getUserData = () => {
    const userDataKey = getUserDataKey()
    return JSON.parse(localStorage.getItem(`${userDataKey}`))
}
export const removeUserData = () => {
    return localStorage.removeItem('userDataKey')
}

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////

// System -%- ////

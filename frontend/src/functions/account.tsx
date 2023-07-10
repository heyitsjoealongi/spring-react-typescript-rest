// React -%- ////

// Packages -%- ////

// MUI -%- ////

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export const setUserDataKey = (userDataKey: string) => {
    return localStorage.setItem('userDataKey', JSON.stringify(userDataKey))
}
export const getUserDataKey = () => {
    return JSON.parse(localStorage.getItem('userDataKey'))
}
export const getUserData = () => {
    const userDataKey = getUserDataKey()
    return JSON.parse(localStorage.getItem(`${userDataKey}`))
}
export const removeUserData = () => {
    return localStorage.removeItem('userDataKey')
}

// System -%- ////

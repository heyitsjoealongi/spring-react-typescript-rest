// React -%- ////

// Packages -%- ////
import { atom } from 'recoil'

// Types -%- ////

// MUI -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export const authenticatedState = atom({
    key: 'authenticated', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
})

// System -%- ////

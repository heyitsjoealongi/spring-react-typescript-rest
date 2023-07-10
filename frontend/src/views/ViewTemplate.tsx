// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilValue } from 'recoil'
import { startState } from '../recoil/atoms/startAtom'

// MUI -%- ////

// System Components -%- ////
import StartingUtilityComponent from '../components/utility/StartingUtilityComponent'
import NotificationUtilityComponent from '../components/utility/NotificationUtilityComponent'
import ErrorUtilityComponent from '../components/utility/ErrorUtilityComponent'

// Components -%- ////
import MenuComponent from '../components/menu/MenuComponent'
import FooterMenuComponent from '../components/menu/FooterMenuComponent'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
type ViewTemplateProps = {
    children: React.ReactNode
}
export default function ViewTemplate({ children }: ViewTemplateProps) {
    const starting = useRecoilValue(startState)
    if (starting) {
        return (
            <React.Fragment>
                <MenuComponent />
                {children}
                <FooterMenuComponent />
                <NotificationUtilityComponent />
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <MenuComponent />
                <ErrorUtilityComponent />
                <FooterMenuComponent />
                <StartingUtilityComponent />
            </React.Fragment>
        )
    }
}

// System -%- ////

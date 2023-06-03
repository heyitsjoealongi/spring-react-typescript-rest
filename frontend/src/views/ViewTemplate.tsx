// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilValue } from 'recoil'
import { startState } from '../recoil/atoms/startAtom'

// Types -%- ////
import { ViewTemplateT } from '../types/system'

// MUI -%- ////

// System Components -%- ////
import StartingUtilityComponent from '../components/utility/StartingUtilityComponent'
import NotificationUtilityComponent from '../components/utility/NotificationUtilityComponent'
import ErrorUtilityComponent from '../components/utility/ErrorUtilityComponent'
import AnalyticUtilityComponent from '../components/utility/AnalyticUtilityComponent'

// Components -%- ////
import MenuComponent from '../components/menu/MenuComponent'
import FooterMenuComponent from '../components/menu/FooterMenuComponent'

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function ViewTemplate({ children }: ViewTemplateT) {
    const starting = useRecoilValue(startState)
    if (starting) {
        return (
            <React.Fragment>
                <MenuComponent />
                {children}
                <FooterMenuComponent />
                <NotificationUtilityComponent />
                <AnalyticUtilityComponent />
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

// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilValue } from 'recoil'
import { startingState } from '../../recoil/atoms/startingAtom'

// MUI -%- ////

// System Components -%- ////
import StartingUtilityComponent from '../../components/utility/StartingUtilityComponent'
import NotificationUtilityComponent from '../../components/utility/NotificationUtilityComponent'
import ErrorUtilityComponent from '../../components/utility/ErrorUtilityComponent'

// Components -%- ////
import MenuComponent from '../../components/menu/MenuComponent'
import HeroSwiperComponent from '../../components/interactive/HeroSwiperComponent'
import FooterMenuComponent from '../../components/menu/FooterMenuComponent'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function PrimaryInteractiveView() {
    const starting = useRecoilValue(startingState)
    if (starting) {
        return (
            <React.Fragment>
                <MenuComponent />
                <HeroSwiperComponent />
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

// React -%- ////
import * as React from 'react'

// Packages -%- ////

// Types -%- ////

// MUI -%- ////

// System Components -%- ////
import ErrorUtilityComponent from '../../components/utility/ErrorUtilityComponent'

// Components -%- ////
import MenuComponent from '../../components/menu/MenuComponent'
import FooterMenuComponent from '../../components/menu/FooterMenuComponent'

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function ErrorUtilityView() {
    return (
        <React.Fragment>
            <MenuComponent />
            <ErrorUtilityComponent />
            <FooterMenuComponent />
        </React.Fragment>
    )
}

// System -%- ////

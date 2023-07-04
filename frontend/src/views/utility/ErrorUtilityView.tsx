// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////

// System Components -%- ////
import ErrorUtilityComponent from '../../components/utility/ErrorUtilityComponent'

// Components -%- ////
import MenuComponent from '../../components/menu/MenuComponent'
import FooterMenuComponent from '../../components/menu/FooterMenuComponent'

// Integrations -%- ////

// Middleware -%- ////

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

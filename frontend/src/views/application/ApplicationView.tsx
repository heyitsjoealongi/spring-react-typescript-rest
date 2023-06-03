// React -%- ////
import * as React from 'react'

// Packages -%- ////

// Types -%- ////

// MUI -%- ////

// System Components -%- ////

// Components -%- ////
import WelcomeComponent from '../../components/application/WelcomeComponent'
import ArticleScapeComponent from '../../components/application/ArticleScapeComponent'

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function ApplicationView() {
    return (
        <React.Fragment>
            <WelcomeComponent />
            <ArticleScapeComponent />
        </React.Fragment>
    )
}

// System -%- ////

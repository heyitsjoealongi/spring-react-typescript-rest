// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useParams } from 'react-router-dom'

// Types -%- ////

// Types -%- ////

// MUI -%- ////

// System Components -%- ////
// const content = {
//     html: '<h1>Hello World</h1>',
// }

// Components -%- ////
import ArticleSingletonComponent from '../../components/application/ArticleSingletonComponent'

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function ArticleView() {
    // Parameter Hook
    const { slug } = useParams()

    return (
        <React.Fragment>
            <ArticleSingletonComponent slug={slug} />
        </React.Fragment>
    )
}

// System -%- ////

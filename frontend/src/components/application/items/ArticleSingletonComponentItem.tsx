// React -%- ////
import * as React from 'react'

// Packages -%- ////
import parse from 'html-react-parser'

// Types -%- ////
import { ContentT } from '../../../types/contents'

// MUI -%- ////

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function ArticleSingletonComponentItem({
    article_content,
}: ContentT) {
    return <React.Fragment>{parse(article_content)}</React.Fragment>
}

// System -%- ////

// React -%- ////
import * as React from 'react'

// Packages -%- ////

// Types -%- ////

// MUI -%- ////

// System Components -%- ////

// Components -%- ////
import TitleComponent from '../../components/interactive/TitleComponent'
import ArticleSwiperComponent from '../../components/interactive/ArticleSwiperComponent'

// Middleware & Integrations -%- ////
const contents = {
    content_id: 0,
    content_title: 'Spring React TypeScript REST',
    content_sub_title: 'Modern frameworks for establishing performant apps',
    content_paragraphs: [
        {
            content_paragraph_id: 0,
            content_paragraph_content:
                'Create type-safe and performant interfaces backed with multi-threaded data models for definitive backend algorithms that transform and hone information.',
        },
    ],
    content_button_title: 'Learn more',
    content_button_link: '/',
}

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function LandingView() {
    return (
        <React.Fragment>
            <TitleComponent {...contents} />
            <ArticleSwiperComponent />
        </React.Fragment>
    )
}

// System -%- ////

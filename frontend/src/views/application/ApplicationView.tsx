// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////

// System Components -%- ////

// Components -%- ////
import WelcomeComponent from '../../components/application/WelcomeComponent'
import BlogScapeComponent from '../../components/application/BlogScapeComponent'

// Integrations -%- ////
const blog_scape = [
    {
        id: 0,
        slug: 'one',
        cover: `${process.env.REACT_APP_URL + '/assets/jpg/slide-one.jpg'}`,
        title: 'Learn how to continuously integrate React, TypeScript, and Spring',
        topic: 'Cloud Computing',
        caption:
            'Build complex applications with dynamic user interfaces that captivate visual experiences. Advance delivery of content, products, and data with multi-threaded Java.',
    },
    {
        id: 1,
        slug: 'two',
        cover: `${process.env.REACT_APP_URL + '/assets/jpg/slide-two.jpg'}`,
        title: 'Learn how to continuously integrate React, TypeScript,and Spring',
        topic: 'Cloud Computing',
        caption:
            'Build complex applications with dynamic user interfaces that captivate visual experiences. Advance delivery of content, products, and data with multi-threaded Java.',
    },
    {
        id: 2,
        slug: 'three',
        cover: `${process.env.REACT_APP_URL + '/assets/jpg/slide-three.jpg'}`,
        title: 'Learn how to continuously integrate React, TypeScript, and Spring',
        topic: 'Cloud Computing',
        caption:
            'Build complex applications with dynamic user interfaces that captivate visual experiences. Advance delivery of content, products, and data with multi-threaded Java.',
    },
    {
        id: 3,
        slug: 'three',
        cover: `${process.env.REACT_APP_URL + '/assets/jpg/slide-three.jpg'}`,
        title: 'Learn how to continuously integrate React, TypeScript, and Spring',
        topic: 'Cloud Computing',
        caption:
            'Build complex applications with dynamic user interfaces that captivate visual experiences. Advance delivery of content, products, and data with multi-threaded Java.',
    },
    {
        id: 4,
        slug: 'two',
        cover: `${process.env.REACT_APP_URL + '/assets/jpg/slide-two.jpg'}`,
        title: 'Learn how to continuously integrate React, TypeScript,and Spring',
        topic: 'Cloud Computing',
        caption:
            'Build complex applications with dynamic user interfaces that captivate visual experiences. Advance delivery of content, products, and data with multi-threaded Java.',
    },
    {
        id: 5,
        slug: 'one',
        cover: `${process.env.REACT_APP_URL + '/assets/jpg/slide-one.jpg'}`,
        title: 'Learn how to continuously integrate React, TypeScript, and Spring',
        topic: 'Cloud Computing',
        caption:
            'Build complex applications with dynamic user interfaces that captivate visual experiences. Advance delivery of content, products, and data with multi-threaded Java.',
    },
    {
        id: 6,
        slug: 'one',
        cover: `${process.env.REACT_APP_URL + '/assets/jpg/slide-one.jpg'}`,
        title: 'Learn how to continuously integrate React, TypeScript, and Spring',
        topic: 'Cloud Computing',
        caption:
            'Build complex applications with dynamic user interfaces that captivate visual experiences. Advance delivery of content, products, and data with multi-threaded Java.',
    },
    {
        id: 7,
        slug: 'two',
        cover: `${process.env.REACT_APP_URL + '/assets/jpg/slide-two.jpg'}`,
        title: 'Learn how to continuously integrate React, TypeScript,and Spring',
        topic: 'Cloud Computing',
        caption:
            'Build complex applications with dynamic user interfaces that captivate visual experiences. Advance delivery of content, products, and data with multi-threaded Java.',
    },
    {
        id: 8,
        slug: 'three',
        cover: `${process.env.REACT_APP_URL + '/assets/jpg/slide-three.jpg'}`,
        title: 'Learn how to continuously integrate React, TypeScript, and Spring',
        topic: 'Cloud Computing',
        caption:
            'Build complex applications with dynamic user interfaces that captivate visual experiences. Advance delivery of content, products, and data with multi-threaded Java.',
    },
]

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function ApplicationView() {
    return (
        <React.Fragment>
            <WelcomeComponent />
            <BlogScapeComponent blog_scape={blog_scape} />
        </React.Fragment>
    )
}

// System -%- ////

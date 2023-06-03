// React -%- ////

// Packages -%- ////

// Types -%- ////
export type ImageSwipesT = {
    swipes: {
        image_id: number
        image_source: string
        image_description: string
    }[]
}
export type ImageSwipeT = {
    image_id: number
    image_source: string
    image_description: string
}
export type ArticleSwipesT = {
    swipes: {
        article_id: number
        article_slug: string
        article_cover: string
        article_title: string
        article_topic: string
        article_caption: string
    }[]
}
export type ArticleSwipeT = {
    article_id: number
    article_slug: string
    article_cover: string
    article_title: string
    article_topic: string
    article_caption: string
}
export type TitleContentsT = {
    contents: {
        content_id: number
        content_title: string
        content_sub_title: string
        content_paragraphs: {
            content_paragraph_id: number
            content_paragraph_content: string
        }[]
        content_button_title: string
        content_button_link: string
    }
}
export type TitleContentT = {
    content_id: number
    content_title: string
    content_sub_title: string
    content_paragraphs: {
        content_paragraph_id: number
        content_paragraph_content: string
    }[]
    content_button_title: string
    content_button_link: string
}
export type ParagraphContentT = {
    content_paragraph_id: number
    content_paragraph_content: string
}

// MUI -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////

// System -%- ////

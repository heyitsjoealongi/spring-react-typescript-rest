// Deno -%- ////

// Packages -%- ////

// Types -%- ////
export type ArticlesT = {
  articleId: number;
  articleSlug: string;
  articleCover: string;
  articleTitle: string;
  articleTopic: string;
  articleCaption: string;
}[];
export type ArticleT = {
  article_id: number;
  article_slug: string;
  article_cover: string;
  article_title: string;
  article_topic: string;
  article_caption: string;
};
export type ArticlesNormalizedT = {
  article_id: number;
  article_slug: string;
  article_cover: string;
  article_title: string;
  article_topic: string;
  article_caption: string;
}[];
export type TopicsT = Array<string>;
export type TopicT = {
  article_id: number;
  article_topic: string;
};
export type TopicsNormalizedT = {
  article_id: number;
  article_topic: string;
}[];

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////

// System -%- ////

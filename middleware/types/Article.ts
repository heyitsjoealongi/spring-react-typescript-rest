// Deno -%- ////

// Packages -%- ////

// Types -%- ////
type Articles = {
  articleId: number;
  articleSlug: string;
  articleCover: string;
  articleTitle: string;
  articleTopic: string;
  articleCaption: string;
}[];
type Article = {
  article_id: string;
  article_slug: string;
  article_cover: string;
  article_title: string;
  article_topic: string;
  article_caption: string;
};
type ArticlesNormalized = {
  article_id: string;
  article_slug: string;
  article_cover: string;
  article_title: string;
  article_topic: string;
  article_caption: string;
}[];
type Topics = Array<string>;
type Topic = {
  article_id: number;
  article_topic: string;
};
type TopicsNormalized = {
  article_id: number;
  article_topic: string;
}[];

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////

// System -%- ////

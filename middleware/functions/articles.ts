// Deno -%- ////

// Packages -%- ////

// Types -%- ////
import {
  ArticlesT,
  ArticlesNormalizedT,
  ArticleT,
  TopicsT,
  TopicsNormalizedT,
  TopicT,
} from "../types/article.ts";

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////
export const normalizeArticles = async (data: ArticlesT) => {
  try {
    const articles: ArticlesNormalizedT = [];
    data.forEach(
      ({
        articleId,
        articleSlug,
        articleCover,
        articleTitle,
        articleTopic,
        articleCaption,
      }) => {
        const article: ArticleT = {
          article_id: articleId,
          article_slug: articleSlug,
          article_cover: articleCover,
          article_title: articleTitle,
          article_topic: articleTopic,
          article_caption: articleCaption,
        };
        articles.push(article);
      }
    );
    return articles;
  } catch (error) {
    console.log("Error normalizing articles (Middleware)");
    return;
  }
};
export const normalizeTopics = async (data: TopicsT) => {
  try {
    const topics: TopicsNormalizedT = [];
    data.forEach((data, index) => {
      const topic: TopicT = {
        article_id: index,
        article_topic: data,
      };
      topics.push(topic);
    });
    return topics;
  } catch (error) {
    console.log("Error normalizing topics (Middleware)");
    return;
  }
};

// System -%- ////

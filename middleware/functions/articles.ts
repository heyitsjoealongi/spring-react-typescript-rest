// Deno -%- ////

// Packages -%- ////

// Types -%- ////
import { Articles, ArticlesNormalized, Article } from "../types/article.ts";

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////
export const normalizeArticles = async (data: Articles) => {
  try {
    const articles: ArticlesNormalized = [];
    data.forEach(
      ({
        articleId,
        articleSlug,
        articleCover,
        articleTitle,
        articleTopic,
        articleCaption,
      }) => {
        const article: Article = {
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
export const normalizeTopics = async (data: Topics) => {
  try {
    const topics: TopicsNormalized = [];
    data.forEach((data, index) => {
      const topic: Topic = {
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

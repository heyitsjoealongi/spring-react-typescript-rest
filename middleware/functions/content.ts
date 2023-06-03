// Deno -%- ////

// Packages -%- ////

// Types -%- ////
import { SearchesT, SearchesNormalizedT, SearchT } from "../types/content.ts";

// Components -%- ////

// Middleware & Integrations -%- ////

// Application -%- ////
export const normalizeSearches = async (data: SearchesT) => {
  try {
    const searches: SearchesNormalizedT = [];
    data.forEach(({ articleId, articleSlug, articleContent }) => {
      const search: SearchT = {
        article_id: articleId,
        article_slug: articleSlug,
        article_content: articleContent,
      };
      searches.push(search);
    });
    return searches;
  } catch (error) {
    console.log("Error normalizing search (Middleware)");
    return;
  }
};

// System -%- ////

package com.springreacttypescriptrest.backend.models;

import jakarta.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer articleId;

    private String articleSlug;

    private String articleCover;

    private String articleTitle;

    private String articleTopic;

    private String articleCaption;

    public Integer getArticleId() {
        return articleId;
    }

    public String getArticleSlug() {
        return articleSlug;
    }

    public String getArticleCover() {
        return articleCover;
    }

    public String getArticleTitle() {
        return articleTitle;
    }

    public String getArticleTopic() { return articleTopic; }

    public String getArticleCaption() {
        return articleCaption;
    }

    public void setArticleId(Integer articleId) {
        this.articleId = articleId;
    }

    public void setArticleSlug(String articleSlug) {
        this.articleSlug = articleSlug;
    }

    public void setArticleCover(String articleCover) {
        this.articleCover = articleCover;
    }

    public void setArticleTitle(String articleTitle) {
        this.articleTitle = articleTitle;
    }

    public void setArticleTopic(String articleTopic) {
        this.articleTopic = articleTopic;
    }

    public void setArticleCaption(String articleCaption) {
        this.articleCaption = articleCaption;
    }

}
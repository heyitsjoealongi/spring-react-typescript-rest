package com.springreacttypescriptrest.backend.models;

import jakarta.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer article_id;

    private String article_slug;

    private String article_cover;

    private String article_title;

    private String article_topic;

    private String article_caption;

    public Integer getArticleId() {
        return article_id;
    }

    public String getArticleSlug() {
        return article_slug;
    }

    public String getArticleCover() {
        return article_cover;
    }

    public String getArticleTitle() {
        return article_title;
    }

    public String getArticleTopic() { return article_topic; }

    public String getArticleCaption() {
        return article_caption;
    }

    public void setArticleId(Integer article_id) {
        this.article_id = article_id;
    }

    public void setArticleSlug(String article_slug) {
        this.article_slug = article_slug;
    }

    public void setArticleCover(String article_cover) {
        this.article_cover = article_cover;
    }

    public void setArticleTitle(String article_title) {
        this.article_title = article_title;
    }

    public void setArticleTopic(String article_topic) {
        this.article_topic = article_topic;
    }

    public void setArticleCaption(String article_caption) {
        this.article_caption = article_caption;
    }

}
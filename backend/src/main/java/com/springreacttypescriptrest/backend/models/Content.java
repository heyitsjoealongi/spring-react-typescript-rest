package com.springreacttypescriptrest.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Content {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer articleId;

    private String articleSlug;

    private String articleContent;

    public Integer getArticleId() {
        return articleId;
    }

    public String getArticleSlug() { return articleSlug; }

    public String getArticleContent() {
        return articleContent;
    }

    public void setArticleId(Integer articleId) {
        this.articleId = articleId;
    }

    public void setArticleSlug(String articleSlug) {
        this.articleSlug = articleSlug;
    }

    public void setArticleContent(String articleContent) {
        this.articleContent = articleContent;
    }

}

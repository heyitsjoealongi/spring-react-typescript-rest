package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Article {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String slug;

    private String cover;

    private String title;

    private String topic;

    private String caption;

    public Integer getId() {
        return id;
    }

    public String getSlug() {
        return slug;
    }

    public String getCover() {
        return cover;
    }

    public String getTitle() {
        return title;
    }

    public String getTopic() {
        return topic;
    }

    public String getCaption() {
        return caption;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public void setTitle(String title) {
        this.cover = title;
    }

    public void setTopic(String topic) {
        this.cover = topic;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

}
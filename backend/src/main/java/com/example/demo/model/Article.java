package com.example.demo.model;

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

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public void getCover(String cover) {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.cover = title;
    }

    public void getTitle(String title) {
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.cover = topic;
    }

    public void getTopic(String topic) {
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public void getCaption(String caption) {
    }

}
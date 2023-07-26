package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity // This tells Hibernate to make a table out of this class
public class Analytic {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String url;

    private String timestamp;

    private String useragent;

    private String language;

    private String geolocation;

    public Integer getId() {
        return id;
    }

    public String getURL() {
        return url;
    }

    public String getTimestamp() {
        return timestamp;
    }

//    public String getUserAgent() {
//        return useragent;
//    }

    public String getLanguage() {
        return language;
    }

//    public String getGeoLocation() {
//        return geolocation;
//    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setURL(String url) {
        this.url = url;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public void setUserAgent(String useragent) {
        this.useragent = useragent;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public void setGeoLocation(String geolocation) {
        this.geolocation = geolocation;
    }

    public Analytic() {
    }

}
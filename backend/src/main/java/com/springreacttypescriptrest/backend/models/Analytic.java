package com.springreacttypescriptrest.backend.models;

import jakarta.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
public class Analytic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer analytic_id;

    private String analytic_url;

    private String analytic_timestamp;

    private String analytic_useragent;

    private String analytic_language;

    private String analytic_geolocation;

    public Integer getAnalyticId() {
        return analytic_id;
    }

    public String getAnalyticUrl() {
        return analytic_url;
    }

    public String getAnalyticTimestamp() {
        return analytic_timestamp;
    }

//    public String getAnalyticUserAgent() {
//        return analytic_useragent;
//    }

    public String getAnalyticLanguage() {
        return analytic_language;
    }

//    public String getAnalyticLocation() {
//        return analytic_geolocation;
//    }

    public void setAnalyticId(Integer analytic_id) {
        this.analytic_id = analytic_id;
    }

    public void setAnalyticUrl(String analytic_url) {
        this.analytic_url = analytic_url;
    }

    public void setAnalyticTimestamp(String analytic_timestamp) {
        this.analytic_timestamp = analytic_timestamp;
    }

    public void setAnalyticUserAgent(String analytic_useragent) {
        this.analytic_useragent = analytic_useragent;
    }

    public void setAnalyticLanguage(String analytic_language) {
        this.analytic_language =  analytic_language;
    }

    public void setAnalyticGeoLocation(String analytic_geolocation) {
        this.analytic_geolocation = analytic_geolocation;
    }

}
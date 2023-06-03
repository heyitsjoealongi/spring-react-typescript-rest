package com.springreacttypescriptrest.backend.models;

import jakarta.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
public class Analytic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer analyticId;

    private String analyticUrl;

    private String analyticTimestamp;

    private String analyticUseragent;

    private String analyticLanguage;

    private String analyticGeolocation;

    public Integer getAnalyticId() {
        return analyticId;
    }

    public String getAnalyticUrl() {
        return analyticUrl;
    }

    public String getAnalyticTimestamp() {
        return analyticTimestamp;
    }

    public String getAnalyticUserAgent() {
        return analyticUseragent;
    }

    public String getAnalyticLanguage() {
        return analyticLanguage;
    }

//    public String getAnalyticLocation() {
//        return analyticGeolocation;
//    }

    public void setAnalyticId(Integer analyticId) {
        this.analyticId = analyticId;
    }

    public void setAnalyticUrl(String analyticUrl) {
        this.analyticUrl = analyticUrl;
    }

    public void setAnalyticTimestamp(String analyticTimestamp) {
        this.analyticTimestamp = analyticTimestamp;
    }

    public void setAnalyticUserAgent(String analyticUseragent) {
        this.analyticUseragent = analyticUseragent;
    }

    public void setAnalyticLanguage(String analyticLanguage) {
        this.analyticLanguage =  analyticLanguage;
    }

    public void setAnalyticGeoLocation(String analyticGeolocation) {
        this.analyticGeolocation = analyticGeolocation;
    }

}
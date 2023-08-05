package com.example.demo.models;

import jakarta.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
public class Analytic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer analyticId;

    private String analyticURL;

    private String analyticTimestamp;

    private String analyticUserAgent;

    private String analyticLanguage;

    private String analyticGeoLocation;

    public Integer getAnalyticId() {
        return analyticId;
    }

    public String getAnalyticURL() {
        return analyticURL;
    }

    public String getAnalyticTimestamp() {
        return analyticTimestamp;
    }

//    public String getAnalyticUserAgent() {
//        return analyticUserAgent;
//    }

    public String getAnalyticLanguage() {
        return analyticLanguage;
    }

//    public String getAnalyticLocation() {
//        return analyticGeoLocation;
//    }

    public void setAnalyticId(Integer analyticId) {
        this.analyticId = analyticId;
    }

    public void setAnalyticURL(String analyticURL) {
        this.analyticURL = analyticURL;
    }

    public void setAnalyticTimestamp(String analyticTimestamp) {
        this.analyticTimestamp = analyticTimestamp;
    }

    public void setAnalyticUserAgent(String analyticUserAgent) {
        this.analyticUserAgent = analyticUserAgent;
    }

    public void setAnalyticLanguage(String analyticLanguage) {
        this.analyticLanguage = analyticLanguage;
    }

    public void setAnalyticGeoLocation(String analyticGeoLocation) {
        this.analyticGeoLocation = analyticGeoLocation;
    }

    public Analytic() {
    }

}
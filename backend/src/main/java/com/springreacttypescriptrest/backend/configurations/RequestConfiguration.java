package com.springreacttypescriptrest.backend.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.CommonsRequestLoggingFilter;

@Configuration
public class RequestConfiguration {

    @Bean
    CommonsRequestLoggingFilter commonsRequestLoggingFilter() {

        CommonsRequestLoggingFilter filter
                = new CommonsRequestLoggingFilter();

        filter.setIncludeQueryString(true);
        filter.setIncludePayload(true);
        filter.setIncludeHeaders(false);
        filter.setMaxPayloadLength(10000);
        filter.setAfterMessagePrefix("RESTful Service: ");

        return filter;

    }

}
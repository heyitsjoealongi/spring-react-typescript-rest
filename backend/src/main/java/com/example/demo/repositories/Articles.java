package com.example.demo.repositories;

import io.collectedview.backend.models.Article;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called database
// CRUD refers Create, Read, Update, Delete

public interface Articles extends CrudRepository<Article, Integer> {

    // Find All Distinct Topics
    @Query(
            value = "SELECT DISTINCT article_topic FROM `defaultdb`.`article`",
            nativeQuery = true
    )
    List<Object> findAllTopics();

}
package com.example.demo.repositories;

import com.example.demo.interfaces.Topics;
import com.example.demo.models.Article;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Collection;

// This will be AUTO IMPLEMENTED by Spring into a Bean called database
// CRUD refers Create, Read, Update, Delete

public interface Articles extends CrudRepository<Article, Integer> {

    // Find All Distinct Topics
    @Query(
            value = "SELECT DISTINCT topic FROM `rdsa`.`article`",
            nativeQuery = true
    )
    Collection<Topics> findAllTopics();

}
package com.example.demo.repository;

import com.example.demo.model.ArticleModel;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called database
// CRUD refers Create, Read, Update, Delete

public interface ArticleRepository extends CrudRepository<ArticleModel, Integer> {

}
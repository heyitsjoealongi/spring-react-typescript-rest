package com.springreacttypescriptrest.backend.repositories;

import com.springreacttypescriptrest.backend.models.Content;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called database
// CRUD refers Create, Read, Update, Delete

public interface Contents extends CrudRepository<Content, Integer> {

    List<Object> findByArticleSlug(String article_slug);

}

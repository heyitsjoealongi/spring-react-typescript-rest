package com.example.demo.controllers;

import io.collectedview.backend.models.Article;
import io.collectedview.backend.repositories.Articles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // This means that this class is a Rest Controller
@RequestMapping(path="/articles") // This means URL's start with /demo (after Application path)
public class ArticlesController {

    @Autowired // This means to get the bean called articlesRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private Articles articles;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Article> getAllArticles() {

        // This returns a JSON or XML with the articles
        return articles.findAll();

    }

    @GetMapping(path="/topics")
    public @ResponseBody List<Object> getAllTopics() {

        // This returns a JSON or XML with the topics of articles
        return articles.findAllTopics();

    }

}
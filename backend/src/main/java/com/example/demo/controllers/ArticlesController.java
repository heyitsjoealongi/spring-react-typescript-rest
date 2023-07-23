package com.example.demo.controllers;

import com.example.demo.interfaces.TopicsOnly;
import com.example.demo.models.Article;
import com.example.demo.repositories.Articles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // This means that this class is a Controller
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
    public @ResponseBody Iterable<TopicsOnly> getAllTopics() {

        // This returns a JSON or XML with the topics of articles
        return articles.findAllTopics();

    }

}
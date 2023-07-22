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

    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private Articles articles;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Article> getAllArticles() {
        // This returns a JSON or XML with the users
        return articles.findAll();
    }

    @GetMapping(path="/topics")
    public @ResponseBody Iterable<TopicsOnly> getAllTopics() {

        // This returns a JSON or XML with the users
        return articles.findAllTopics();
    }

    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody String addNewArticle (
            @RequestParam String slug,
            @RequestParam String cover,
            @RequestParam String title,
            @RequestParam String topic,
            @RequestParam String caption
    ) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        Article article = new Article();
        article.setSlug(slug);
        article.getCover(cover);
        article.getTitle(title);
        article.getTopic(topic);
        article.getCaption(caption);
        articles.save(article);
        return "Saved";
    }

}
package com.example.demo.controller;

import com.example.demo.model.Article;

import com.example.demo.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller // This means that this class is a Controller
@RequestMapping(path="/article") // This means URL's start with /demo (after Application path)
public class ArticleController {

    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private ArticleRepository articleRepository;

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
        articleRepository.save(article);
        return "Saved";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/all")
    public @ResponseBody Iterable<Article> getAllArticles() {
        // This returns a JSON or XML with the users
        return articleRepository.findAll();
    }

}
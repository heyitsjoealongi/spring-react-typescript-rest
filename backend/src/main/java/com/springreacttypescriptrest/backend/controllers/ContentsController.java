package com.springreacttypescriptrest.backend.controllers;

import com.springreacttypescriptrest.backend.models.Content;
import com.springreacttypescriptrest.backend.repositories.Contents;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // This means that this class is a Rest Controller
@RequestMapping(path="/contents") // This means URL's start with /demo (after Application path)
public class ContentsController {

    @Autowired // This means to get the bean called articlesRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private Contents contents;

    @GetMapping(path="/search")
    public @ResponseBody List<Object> getContent(@RequestParam String article_slug) {

        // This returns a JSON or XML with the content
        return contents.findByArticleSlug(article_slug);

    }


}

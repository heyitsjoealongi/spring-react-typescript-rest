package com.springreacttypescriptrest.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController // This means that this class is a Rest Controller
@RequestMapping(path="/") // This means URL's start with /demo (after Application path)
public class CollectedviewController {

    @GetMapping(path="/")
    public @ResponseBody String Collectedview() {

        // This returns a JSON or XML with the name of the application
        return "collectedview";

    }

}
package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExampleController {

    // Calculator calculator = new Calculator();

    @GetMapping(path = "/calculator")
    public String doOperation(/*@RequestParam String op1, String op2, String operator*/) {
        return "Hello World";
    }
}

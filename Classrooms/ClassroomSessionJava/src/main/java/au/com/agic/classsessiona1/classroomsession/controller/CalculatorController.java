package au.com.agic.classsessiona1.classroomsession.controller;

import au.com.agic.classsessiona1.classroomsession.services.CalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {

    @Autowired
    private CalculatorService calculatorService;

    @GetMapping(path = "/calculator")
    public String calculate(@RequestParam(name = "firstNumber") String firstNumber,
                            @RequestParam(name = "secondNumber") String secondNumber,
                            @RequestParam(name = "operationToPrform") String operationToPrform) {

        System.out.println("WHAT I GET FROM BROWSER: " + firstNumber + ", " + secondNumber + ", " + operationToPrform);

        return calculatorService.evaluate(firstNumber, secondNumber, operationToPrform);

    }


}

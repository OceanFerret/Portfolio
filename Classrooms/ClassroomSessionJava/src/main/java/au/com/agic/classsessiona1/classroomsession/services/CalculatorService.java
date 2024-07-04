package au.com.agic.classsessiona1.classroomsession.services;

import org.springframework.stereotype.Service;

@Service
public class CalculatorService {

    public String evaluate(String operator, String operand1, String operand2) {


//        double result = operator.evaluate(operand1, operand2);
//        persistenceService.save(operator, operand1, operand2, result);
        String result = operator.toUpperCase().concat(operand1).toUpperCase().concat(operand2);
        return result;
    }

}

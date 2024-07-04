import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Calculator calculator = new Calculator();
        boolean finished = false;

        while(!finished) {
            //Inputs for doubles variables
            System.out.println("give first number");
            double x = scanner.nextDouble();

            System.out.println("give second number");
            double y = scanner.nextDouble();

            System.out.println("What kind of operation are you going to perform? ('+, -, *, /')");
            String op = scanner.next();

            //Switch case from input
            double sum;
            switch (op) {
                case "+": sum = calculator.addition(x, y); break;
                case "-": sum = calculator.subtraction(x, y); break;
                case "*": sum = calculator.multiply(x, y); break;
                case "/": sum = Calculator.validationBeforeCalculation(x, y, calculator); break;
                default:
                    System.out.println("Operation is not valid");
                    continue;
            }

            //debug checker
//        System.out.println(">>>>>" + x + "  " + y);
            System.out.println("Do you want to continue? Y/N");
            String cont = scanner.next();
            finished = cont.equalsIgnoreCase("N");
            //equations to check different methods
//        double sum = calculator.addition(x, y);
            System.out.println("The sum is: " + sum);

//        double sumSub = calculator.subtraction(x, y);
//        System.out.println("The sum is: " + sumSub);
//
//        double sumMulti = calculator.multiply(x, y);
//        System.out.println("The sum is: " + sumMulti);
        }
        //close scanner
        scanner.close();
    }
}

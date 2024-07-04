public class Calculator {
    int x = 0;
    int y = 0;
    public double addition(double x, double y){
        return  x + y;
    }

    public double subtraction(double x, double y){
        return x - y;
    }

    public double multiply(double x, double y){
        return x * y;
    }

    public double divide(double x, double y){
        return x / y;
    }

    public static double validationBeforeCalculation(double x, double y, Calculator calculator)
    {
        if (y == 0) {
            throw new RuntimeException("Division by 0 is not allowed");
            /*
            * System.out.Println("Unable to Divide by 0, Re-enter Number? ")
            *
            * */
        }
        else{
            return calculator.divide(x, y);
        }
    }

}

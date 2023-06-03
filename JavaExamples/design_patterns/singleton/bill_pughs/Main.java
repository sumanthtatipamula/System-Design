package design_patterns.singleton.bill_pughs;

public class Main {
    public static void main(String[] args) {
        Logger logger = Logger.getLoggerInstance();
        Logger logger1 = Logger.getLoggerInstance();
        if(logger == logger1){
            System.out.println("logger and logger1 are same instance");
        }
    }
}

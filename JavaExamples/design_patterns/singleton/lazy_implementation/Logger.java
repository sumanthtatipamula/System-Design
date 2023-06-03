package design_patterns.singleton.lazy_implementation;

public class Logger {
    private static Logger instance;
    private Logger(){

    }
    public static synchronized Logger getInstance(){
        // Lazy Initialization
        if(Logger.instance == null){
            Logger.instance = new Logger();
            instance.log("Creating new logger instance");
        }
        else{
            instance.log("Instance has been already created");
        }
        return  Logger.instance;
    }

    public void log(String message){
        System.out.println("Logging :" + message);
    }
}

package design_patterns.singleton.bill_pughs;

public class Logger {
    private Logger(){
    }
    private static class SingletonHelper {
        private static final Logger LOGGER_INSTANCE = new Logger();
    }
    public static Logger getLoggerInstance(){
        return SingletonHelper.LOGGER_INSTANCE;
    }
}

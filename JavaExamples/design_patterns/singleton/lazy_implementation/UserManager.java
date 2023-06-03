package design_patterns.singleton.lazy_implementation;

public class UserManager {
    private Logger logger;
    public UserManager(){
        logger = Logger.getInstance();
    }
    public void addUser(String username, String password){
        logger.log("User added: " + username);
    }
}

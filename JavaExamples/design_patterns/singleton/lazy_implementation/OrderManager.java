package design_patterns.singleton.lazy_implementation;

public class OrderManager {
    private Logger logger;
    public OrderManager(){
        logger = Logger.getInstance();
    }
    public void placeOrder(String productId, int quantity) {
        // Place order implementation goes here
        logger.log("Order placed: " + quantity + " of product " + productId);
    }
}

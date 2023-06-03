package design_patterns.singleton.lazy_implementation;

public class Main {
    public static void main(String[] args) {
        UserManager userManager = new UserManager();
        OrderManager orderManager  = new OrderManager();
        userManager.addUser("John", "password");
        orderManager.placeOrder("1234", 6);
    }
}

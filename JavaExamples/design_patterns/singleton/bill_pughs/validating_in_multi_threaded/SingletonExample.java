package design_patterns.singleton.bill_pughs.validating_in_multi_threaded;

public class SingletonExample {
    private static SingletonExample instance;
    private static class Helper{
        private static final SingletonExample INSTANCE = new SingletonExample();
        static{
            System.out.println("Bill's Pughs Solution");
        }
    }
    public static SingletonExample getInstance(){
       return Helper.INSTANCE;
    }
    private SingletonExample(){
        System.out.println("In constructor");
    }
    public void print(String message){
        System.out.println(message);
    }
}


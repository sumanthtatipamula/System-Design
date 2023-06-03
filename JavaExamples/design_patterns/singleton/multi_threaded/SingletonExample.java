package design_patterns.singleton.multi_threaded;

public class SingletonExample {
    private static SingletonExample instance;
    public static synchronized SingletonExample getInstance(){
        if(SingletonExample.instance == null){
            System.out.println("Creation taken place");
            SingletonExample.instance = new SingletonExample();
        }
        return SingletonExample.instance;
    }
    private SingletonExample(){
        System.out.println("In constructor");
    }
    public void print(String message){
        System.out.println(message);
    }
}

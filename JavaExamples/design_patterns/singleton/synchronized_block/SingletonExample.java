package design_patterns.singleton.synchronized_block;

public class SingletonExample {
    private static volatile SingletonExample instance;
    public static SingletonExample getInstance(){
        if(instance == null){
            synchronized (SingletonExample.class){
                if(instance == null){
                    System.out.println("Created only once");
                    instance = new SingletonExample();
                }
            }
        }
        return instance;
    }
    public void print(String message){
        System.out.println(message);
    }
}

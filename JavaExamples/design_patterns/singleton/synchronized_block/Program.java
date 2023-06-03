package design_patterns.singleton.synchronized_block;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Program {
    private static void print(){
        SingletonExample obj = SingletonExample.getInstance();
        obj.print("message from obj1");
    }
    private static void printSecond(){
        SingletonExample obj = SingletonExample.getInstance();
        obj.print("message from obj2");
    }
    private static void printThird(){
        SingletonExample obj = SingletonExample.getInstance();
        obj.print("message from obj3");
    }
    private static void printFourth(){
        SingletonExample obj = SingletonExample.getInstance();
        obj.print("message from obj4");
    }
    public static void main(String[] args) {
        ExecutorService executorService = Executors.newCachedThreadPool();
        Runnable createFirstObj =  () -> print();
        executorService.execute(createFirstObj);
        Runnable createSecondObj =  () -> printSecond();
        executorService.execute(createSecondObj);
        Runnable createThirdObj =  () -> printThird();
        executorService.execute(createThirdObj);
        executorService.shutdown();
    }
}

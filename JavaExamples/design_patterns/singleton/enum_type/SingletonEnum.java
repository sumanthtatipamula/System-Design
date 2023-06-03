package design_patterns.singleton.enum_type;

public enum SingletonEnum {
    INSTANCE;
    public void print(String message){
        System.out.println(message);
    }
}

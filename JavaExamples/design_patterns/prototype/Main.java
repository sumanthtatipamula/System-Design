package design_patterns.prototype;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws CloneNotSupportedException {
       Person person = new Person("john");
       Person person1 = (Person) person.clone();
        System.out.println(person.getName());
        System.out.println(person1.getName());
    }
}

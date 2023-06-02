---
title: Singleton Design Pattern
tags:
  - Design Patterns
  - Creational
---

## Introduction

- Deals with object creation mechanism.

- It is used when we want to have only one object of a particular class.

- An application may require multiple object instances that all use one unique resource. This fact introduces instability because any of these objects can access such a resource. A singleton guarantees only one instance that provides a global access point to all clients within the desired scope of the running JVM.

- We cannot inherit a class with private constructor however, we can have nested classes.

## Real Time Usage in JDK

- The best example of using a singleton is a running Java application, or more precisely, the runtime. It is found in the _Runtime_ class and its method, _getRuntime_, resides in the **java.lang** package of the **java.base** module. The method returns an object associated with the current Java application. The runtime instance allows the client to add, for example, shutdown hooks to the running application.

## Real-World Usage

1. **Logging**: In a logging system, you may want to have a single instance of a logger class that handles all the logging operations throughout the application.

2. **Database connections**: When working with databases, you typically establish a connection to the database server. The singleton pattern can be used to ensure that only one connection object is created and shared across different parts of the application.

3. **Caching**: In caching systems, you may want to have a single instance of a cache manager that handles caching operations, such as storing and retrieving frequently accessed data.

4. **Configuration settings**: Singleton can be used to store and retrieve configuration settings for an application.

5. **Thread pools**: In multi-threaded applications, a singleton pattern can be employed to manage a pool of worker threads.

6. **GUI components**: In graphical user interface (GUI) frameworks, you might want to have a single instance of certain components, such as a dialog box or a menu.

## Variations

- Early Loading(Eager Loading)
- Lazy loading(on demand loading)
- Lazy Loading(thread safe)
- Bill Pugh's
- Enum type

## Implementation

### Lazy Loading

#### Steps

- Make Constructor Private
- User a public static getter method that returns the static instance of the Singleton class.
- Use synchronized keyword.

#### Example

- we have a `Logger` class that follows the Singleton pattern. It ensures that only one instance of the `Logger` class exists throughout the application. The `UserManager` and `OrderManager` classes are two separate classes that utilize the `Logger` instance to log different events. By using the `Logger.getInstance()` method, both `UserManager` and `OrderManager` obtain the same instance of the `Logger` class, ensuring that logs are written to a single log file.

```java
public class Logger {
    private static Logger instance;

    private Logger() {
        // Private constructor to prevent instantiation from outside the class
    }

    public static Logger getInstance() {
        if (instance == null) {
            synchronized (Logger.class) {
                if (instance == null) {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }

    public void log(String message) {
        // Logging implementation goes here
        System.out.println("Logging: " + message);
    }
}

public class UserManager {
    private Logger logger;

    public UserManager() {
        logger = Logger.getInstance();
    }

    public void addUser(String username, String password) {
        // Add user implementation goes here
        logger.log("User added: " + username);
    }
}

public class OrderManager {
    private Logger logger;

    public OrderManager() {
        logger = Logger.getInstance();
    }

    public void placeOrder(String productId, int quantity) {
        // Place order implementation goes here
        logger.log("Order placed: " + quantity + " of product " + productId);
    }
}
```

- The `Main` class is the entry point of the application. It demonstrates the usage of the `UserManager` and `OrderManager` classes with the `Logger` singleton. In the `main` method, instances of `UserManager` and `OrderManager` are created. The `addUser()` method of `UserManager` is called to add a user, and the `placeOrder()` method of `OrderManager` is called to place an order. Both methods utilize the same instance of the `Logger` class obtained through the `Logger.getInstance()` method. As a result, the log messages will be written to a single log file.

```java
public class Main {
    public static void main(String[] args) {
        // Get instances of UserManager and OrderManager
        UserManager userManager = new UserManager();
        OrderManager orderManager = new OrderManager();

        // Add a user
        userManager.addUser("JohnDoe", "password123");

        // Place an order
        orderManager.placeOrder("1234", 5);
    }
}
```

#### key points

- Why do we need to use synchronized keyword ?

This approach can work in a single-threaded environment. But consider a multithreaded environment where two (or more) threads may try to evaluate the following code at the same time:
`if (instance == null)`
If they see that the instance has not been created yet, each of them will try to create a new instance. As a result, you may end up with multiple instances of the class.

- Why the above example named lazy initialization ?

It’s a technique that you use to delay the object creation process. The basic idea is that you should create the object only when it is truly required. This method is useful when object creation is a costly operation.

- Why Singleton pattern ?
  To work with a centralized system (for example, consider a database).
  To maintain a common log file.
  To maintain a thread pool in a multithreaded environment.
  To implement a caching mechanism or device drivers and so forth.

### Eager Implementation

- In this approach, an object of the singleton class is always instantiated at the beginning.

```java
public class Logger {
    private static final Logger instance = new Logger();

    private Logger() {
        // Private constructor to prevent instantiation from outside the class
    }

    public static Logger getInstance() {
        return instance;
    }

    public void log(String message) {
        // Logging implementation goes here
        System.out.println("Logging: " + message);
    }
}
```

<ul>
  <li> Pros 
      <ul>
        <li>This approach is straight forward and cleaner</li>
        <li>It is opposite to Lazy loading, but it is thread safe.</li>
        <li>Helps to load all the needed entities at once.</li>
      </ul>
  </li>
</ul>

<ul>
  <li> Cons 
      <ul>
        <li>Created when class is recognized, as a result the application will take longer to start (compared to lazy initialization) because everything needs to be loaded first. </li>
        <li>Created regardless of invoked or not.</li>
      </ul>
  </li>
</ul>

### Bill Pugh's Solution

- Bill Pugh came up with a different approach using a static nested helper class.
- When the singleton class is loaded, inner class is not loaded and hence doesn’t create object when loading the class. Inner class is created only when getInstance() method is called.
- Since static initialization in Java is guaranteed to be thread-safe, the Bill Pugh Singleton implementation provides thread safety by default. It avoids the need for explicit synchronization and ensures that multiple threads can safely access and use the singleton instance.

```java
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
```

### Enum Singleton

- Enums are public static final fields
- This is the behaviour of the class instances required by the design of singleton
- This is thread safe.
- Enums in Java are inherently thread-safe because they are implicitly final, immutable, and shared among multiple threads without any need for explicit synchronization. Here are the key factors that contribute to the thread safety of enums.

#### Properties of Enums:

- Enum constructors are always private
- We can't create instance of enum using `new` operator.
- We can't extend any class in Enum, but we can implement interfaces.
- Enum constants are static and final.
- Java Best practice is to write enum constants in BLOCK letters.
- Enum constants are final so we can safely compare with `==` and `equals()`

```java
public enum SingletonEnum {
    INSTANCE;
    public void print(String message){
        System.out.println(message);
    }
}
public class Program {
    public static void main(String[] args) {
        SingletonEnum.INSTANCE.print("Message from obj1");
    }
}
```

Cons:

- No Lazy Implementation.

Reference: [Singleton Pattern Best Practices](https://www.digitalocean.com/community/tutorials/java-singleton-design-pattern-best-practices-examples)

Differences Between Static and Singleton classes

| Static                     | Singleton                                                |
| -------------------------- | -------------------------------------------------------- |
| Can't create instance      | Can't create instance                                    |
| Can't implement interfaces | Can implement interfaces, inherit from the other classes |
| It is a keyword            | It is a design pattern                                   |
| Provide static methods     | Singleton provides object                                |

---
title: Strategy Pattern
category:
  - Behavioral
  - Design Patterns
tag:
  - Java
  - Strategy
---

## Introduction

- A client can select an algorithm from a set of algorithms at runtime.

- You know that an object can have states and behaviors. And some of these behaviors may vary among the objects of a class. This pattern focuses on the changing behaviors that can be associated with an object at a specific time.

- You also have a context object that controls the logic of setting and evaluating the current strategy.

::: info GOF definition
It defines a family of algorithms, encapsulates each one, and makes them interchangeable. The Strategy pattern lets the algorithm vary independently from the clients that use it.
:::

### Java Example

- The interface `java.util.comparator`
  - One can implement this interface and provide different algorithms to do different comparisons using `compare()` method.
  - The Comparison result can be further used in various sorting techniques.
  - The `Comparator` interface plays the role of a strategy interface in this context.

## When to use ?

- Use the Strategy pattern when you want to use different variants of an algorithm within an object and be able to switch from one algorithm to another during runtime.
- Use the pattern to isolate the business logic of a class from the implementation details of algorithms that may not be as important in the context of that logic.

## Implementation

- In the `Strategy` pattern, you typically have an `interface` or `abstract` class that represents the `strategy`, defining a contract for the behavior. Concrete classes implement this interface or extend the abstract class, providing their own implementation for the behavior. The client code holds a reference to the strategy interface and can dynamically set or switch between different concrete strategies as needed.

## Example

- The `PaymentStrategy` interface defines a contract for payment strategies, with a `pay` method that accepts the payment amount.

- We then create two concrete payment strategy classes: `CreditCardStrategy` and `PayPalStrategy`. These classes implement the PaymentStrategy interface and provide their own implementation for the `pay` method.

- The `ShoppingCart` class represents the context in which the payment strategy is used. It has a `paymentStrategy` field that can be set dynamically using the `setPaymentStrategy` method. The `pay` method of the `ShoppingCart` class delegates the payment processing to the chosen strategy.

- In the `Main` class, we demonstrate the usage of the strategy pattern. We create a `ShoppingCart` object and set the payment strategy to a credit card. We then call the pay method, which internally invokes the payment strategy's `pay` method to process the payment. Similarly, we switch the payment strategy to PayPal and make another payment using the same `pay` method.

- By using the Strategy pattern, the shopping cart application becomes flexible and extensible. New payment strategies can be added without modifying the existing code, and it allows for easy switching between different payment methods at runtime.

<Replit user="samsandy111999" repl="strategypattern" file="Main.java"/>

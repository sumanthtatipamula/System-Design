---
title: Strategy Pattern
category:
  - Behavioral
  - Design Patterns
tag:
  - TypeScript
  - Strategy
---

## Introduction

- A client can select an algorithm from a set of algorithms at runtime.

- You know that an object can have states and behaviors. And some of these behaviors may vary among the objects of a class. This pattern focuses on the changing behaviors that can be associated with an object at a specific time.

- You also have a context object that controls the logic of setting and evaluating the current strategy.

::: info GOF definition
It defines a family of algorithms, encapsulates each one, and makes them interchangeable. The Strategy pattern lets the algorithm vary independently from the clients that use it.
:::

## When to use ?

- **You have different variants of an algorithm and you want to interchange them at runtime**: The variants of the algorithm might try different paths or conditions and you want the application to be able to switch between them based on some criteria. For example, when you want to calculate taxes for an individual, you may apply different strategies based on the individual's marital status, income, or any disabilities they have. You can create different strategies based on their current state.

## Real World Examples

- The `nuxt-auth` contains `addAuthorize` function that accepts different auth strategies based on the `OAuth` framework.

## Implementation

- In the `Strategy` pattern, you typically have an `interface` or `abstract` class that represents the `strategy`, defining a contract for the behavior. Concrete classes implement this interface or extend the abstract class, providing their own implementation for the behavior. The client code holds a reference to the strategy interface and can dynamically set or switch between different concrete strategies as needed.

## Example

- `BillingStrategy` is an interface that defines the contract for different billing strategies. It declares a `calculate` method that needs to be implemented by concrete strategy classes.

- `ConcreteBillingStrategyA` and `ConcreteBillingStrategyB` are concrete implementations of the `BillingStrategy` interface. They provide their own implementations for the `calculate` method, specific to their respective strategies.

- `BillingContext` is the context class that uses the billing strategies. It has a strategy field representing the current billing strategy. The constructor accepts an initial strategy, and the `setStrategy` method allows switching to a different strategy at runtime. The `calculateBill` method delegates the billing calculation to the current strategy.

<Replit user="samsandy111999" repl="StrategyPattern" file="index.ts"/>

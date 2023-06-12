---
title: Visitor Pattern
category:
  - Behavioral
  - Design Patterns
tag:
  - Java
  - Visitor
icon: user-check
---

## Introduction

- Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.

:::info GOF Definition
It represents an operation to be performed on the elements of an object structure. The Visitor pattern lets you define a new operation without changing the classes of the elements on which it operates.
:::

## Terms

- _Visitor:_ The Visitor component represents the interface or abstract class that defines the visit methods for each type of element in the object structure. Each visit method corresponds to a specific element class and defines the operation to be performed on that element.

- _Concrete Visitor:_ The Concrete Visitor component implements the Visitor interface or class and provides the actual implementation for each visit method. Each concrete visitor class can define different operations on the elements.

- _Element:_ The Element component represents the interface or abstract class that declares the accept method. This method is usually called "accept" and takes a visitor object as an argument. It is implemented by each element class and allows the visitor to perform operations on the element.

## How it works ?

- _Define the visitor interface:_ This interface declares a set of visit methods, each corresponding to a different type of element in the object structure. Each visit method takes a parameter representing the specific element it operates on.

- _Implement the concrete visitor classes:_ Concrete visitor classes implement the visitor interface and provide the actua07:45 AMl implementation for each visit method. Each concrete visitor can define different operations on the elements.

- _Define the element interface:_ This interface declares a method that accepts a visitor object as an argument. This method is usually called "accept" and is implemented by each element class.

- _Implement the concrete element classes:_ Concrete element classes implement the element interface and provide the accept method implementation. The accept method typically calls the corresponding visit method on the visitor object, passing itself as an argument.

- _Create and use object structures:_ Object structures consist of different elements that can be visited by the visitor object. You can create and manipulate these structures using the element classes and perform operations on them using the visitor classes.

<Replit user="sumanthtatipamula" repl="Memento" file="Main.java"/>

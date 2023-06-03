---
title: Creational Patterns
tag:
  - Design Patterns
  - Intro
---

Creational design patterns are a set of design patterns in software development that deal with object creation mechanisms, trying to create objects in a manner suitable for a given situation. These patterns provide ways to create objects while decoupling the client code from the specific classes or objects that are being instantiated. They aim to provide flexibility and reusability in object creation.

There are 6 creational design patterns:

1. Singleton Pattern
2. Factory Pattern method.
3. Abstract Factory Method.
4. Builder Pattern
5. Prototype Pattern
6. Object pool

```mermaid
mindmap
  root))Creational((
    {{Singleton Pattern}}
      (To ensure single instance for a class)
      (usecase: logging system, database connections)
      (constructor is made private)
    {{Factory Pattern method}}
      (creation of objects/ products is delegated to subclasses)
      (objects share a common characteristic)
    {{Abstract Factory Method}}
      (factory of factories)
      (instead of creating factory of an object<br/>used to create factory of related objects)
    {{Builder Pattern}}
      (used to create objects that can have multiple representations)
      (few required parameters and few optionals)
      (eg: user class name and email mandatory. age, gender optionals)
      (method calls are chained)
    {{Prototype Pattern}}
      (used to create new object by making copy on existing object)
      (usecase: when creation of object using operator is expensive)
```

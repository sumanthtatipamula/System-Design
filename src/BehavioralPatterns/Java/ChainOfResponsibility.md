---
title: Chain Of Responsibility
category:
  - Behavioral
  - Design Patterns
tag:
  - Java
  - ChainOfResponsibility
---

## Introduction

- Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

::: info GOF Definition
It avoids coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. It chains the receiving objects and passes the request along the chain until an object handles it.
:::

## Real World Examples

- Most software organizations have customer care representatives who take feedback from customers and forward any issues to the appropriate departments in the organization. However, not all of these departments will start fixing the issue simultaneously. The department that seems to be responsible will take a look at the issue first, and if those employees believe that the issue should be forwarded to another department, they will forward it.

- Exception Handling.(multiple catch statements in try catch block)

## Implementation

- Declare the handler interface and describe the signature of a method for handling requests.

- To eliminate duplicate boilerplate code in concrete handlers, it might be worth creating an abstract base handler class, derived from the handler interface.

- One by one create concrete handler subclasses and implement their handling methods. Each handler should make two decisions when receiving a request:

  - Whether it’ll process the request.
  - Whether it’ll pass the request along the chain.

- The client may trigger any handler in the chain, not just the first one. The request will be passed along the chain until some handler refuses to pass it further or until it reaches the end of the chain.

## Example

- We have a chain of responsibility to process orders. The chain consists of three concrete handlers: `StockHandler`, `ShippingHandler`, and `BillingHandler`. Each handler is responsible for processing orders based on different criteria.

- The `Order` class represents an order with an `item name` and `quantity`.

- The `OrderHandler` interface defines the contract for handlers. It includes methods to set the `next` handler in the chain and `process` the order.

- Each concrete handler (StockHandler, ShippingHandler, and BillingHandler) implements the `OrderHandler` interface and provides their own implementation for processing the order.

- The Main class demonstrates the usage of the chain of responsibility. We create the chain by setting the next handler for each handler. We then process orders by calling the processOrder method on the first handler in the chain.

<Replit user="samsandy111999" repl="ChainOfResponsibility" file="Main.java"/>

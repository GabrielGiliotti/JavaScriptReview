# JavaScript concepts review

This repository aims to review basic JavaScript concepts, algorithms, generate library with Node.Js and Object Orientation concepts.

Each folder contains a specific module of the revision course. 

Some modules do not have well-organized files as they only refer to the review of concepts placed in the same file.

## Basics

This folder has the review basic concepts of JavaScript as:

* Primitive types (number, string, bool, null, undefined, object)
* Dynamic typing
* Not primitive types (array, Set)
* Destructuring ( Ex: const { name, age } = objectWith10Attributes )
* Spread operator ( Ex: use: functionCall(...object.array)  --> declaration: functionCall(n1,n2) )
* Array functions (map, reduce, splice, slice, reverse, etc)
* High-Order-Function
* Function types (functions, expression functions, arrow functions)
* Hoisting (only for functions)
* Errors types (RangeError, ReferenceError, SyntaxError, TypeError)
* Import usage before and after ES6 (require, import)

## Algorithms

* Merge-sort
* Quick-sort
* Selection-Sort
* Insertion-sort
* Binary Search

## LinkLib

* Configuration and read .md files from command prompt
* String validation with Regex to capture links
* Validation of Urls inside the files with status return (200 - OK, 404 - Not Found)
* Use of external libraries (fs, chalk)
* Exception handling (try, catch, finally)

## OO

* Object Prototype use
* Literal Objects
* New usage

* Classes
* Objects
* Inheritance
* Polymorphism
* Encapsulation

* SOLID concepts:
    * Single responsibility principle
    * Open/Closed principle ( open to be expanded, but closed to be modified )
    * Liskov Substitution principle ( if S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program )
    * Interface Segragation principle ( clients should not be forced to rely on methods they do not use --> creating specific interfaces or classes tailored to the needs of individual clients )
    * Dependency Inversion principle ( the high-level module depends on the abstraction, and the low-level depends on the same abstraction - coupling reduction )
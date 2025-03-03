🚀 JavaScript Basics

✅ Variables (let, const, var)

What is it?

Variables are used to store data in JavaScript. They can hold different types of values such as numbers, strings, or objects.

How is it used?

JavaScript provides three ways to declare variables:

var: Function-scoped, can be redeclared and reassigned.

let: Block-scoped, can be reassigned but not redeclared.

const: Block-scoped, cannot be reassigned.

var name = "John";
let age = 25;
const country = "USA";

Why is it used?

Variables allow us to store and manipulate data in a program.

Coding Problems

Declare a variable using var, let, and const and log their values.

Create a program that swaps the values of two variables.

Write a program that declares a constant and tries to change its value.

Use let inside a loop and explain its scope.

Explain the difference between let and var with examples.

✅ Data Types

What is it?

Data types define the kind of data a variable can hold.

How is it used?

JavaScript has the following data types:

Primitive: string, number, boolean, null, undefined, symbol, bigint

Non-primitive: object, array, function

let str = "Hello";  // String
let num = 42;       // Number
let isTrue = true;  // Boolean
let x = null;       // Null
let y;              // Undefined
let id = Symbol();  // Symbol
let bigNum = 9007199254740991n; // BigInt

Why is it used?

Understanding data types helps in proper memory allocation and avoiding unexpected errors.

Coding Problems

Declare variables of all primitive data types and log their values.

Convert a number to a string and vice versa.

Create a program that checks the type of a variable using typeof.

Compare null and undefined.

Create a program that generates a unique Symbol.

✅ Operators

What is it?

Operators are symbols that perform operations on variables and values.

How is it used?

Arithmetic: +, -, *, /, %, ++, --

Comparison: ==, ===, !=, !==, <, >, <=, >=

let a = 5, b = 10;
console.log(a + b); // 15
console.log(a === b); // false

Why is it used?

Operators allow us to manipulate data and perform calculations.

Coding Problems

Perform basic arithmetic operations.

Create a program to check if a number is even or odd.

Compare two strings and numbers using == and ===.

Implement a simple calculator using arithmetic operators.

Demonstrate the use of ++ and --.

✅ Control Flow

What is it?

Control flow determines the execution order of statements in a program.

How is it used?

if-else (Conditional statements)

switch-case (Multiple conditions)

Ternary Operator (condition ? trueValue : falseValue)

let score = 75;
if (score > 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

Why is it used?

Control flow allows us to execute different code blocks based on conditions.

Coding Problems

Write a program that checks if a number is positive, negative, or zero.

Create a simple grading system using if-else.

Implement a menu-driven calculator using switch-case.

Write a program that checks whether a year is a leap year.

Use the ternary operator to assign a value based on a condition.

✅ Loops

What is it?

Loops are used to execute a block of code multiple times.

How is it used?

for loop (Fixed iterations)

while loop (Condition-based iterations)

do-while loop (Executes at least once)

forEach (Iterate over an array)

for (let i = 0; i < 5; i++) {
    console.log(i);
}

Why is it used?

Loops help reduce redundancy and automate repetitive tasks.

Coding Problems

Print numbers from 1 to 10 using a loop.

Find the sum of all even numbers between 1 and 100.

Implement a factorial program using a loop.

Reverse a string using a loop.

Iterate over an array using forEach.

✅ Functions

What is it?

Functions are reusable blocks of code that perform a specific task.

How is it used?

Function declaration

Function expression

Arrow functions

Default parameters

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet("John"));

Why is it used?

Functions make code reusable, modular, and easy to maintain.

Coding Problems

Write a function to find the maximum of two numbers.

Create a function to check if a number is prime.

Implement a function to reverse a string.

Write a function that returns the factorial of a number.

Create a function that generates Fibonacci series.

🛠 Practice Projects

1. Calculator

Create a simple calculator that performs addition, subtraction, multiplication, and division.

Use functions to handle operations.

2. Temperature Converter

Convert temperature between Celsius and Fahrenheit.

Use functions to handle conversion logic.

🎯 Final Coding Challenges (All Topics Combined)

Create a function that takes a number and returns whether it is even or odd.

Write a program that takes user input and determines if it is a palindrome.

Implement a function to count the occurrences of each character in a string.

Develop a simple number guessing game.

Create a program that finds the sum of all prime numbers up to n.

🔹 Console.log()

What is it?

console.log() is a method in JavaScript used to display messages or variable values in the browser's developer console.

How is it used?

let name = "Alice";
console.log(name); // Output: Alice
console.log(5 + 3); // Output: 8
console.log("Hello, world!"); // Output: Hello, world!

Why is it used?

To debug and test code

To check values of variables at different points

To understand the flow of execution in programs

Example: Debugging with console.log()

let a = 10;
let b = 5;
console.log("Before swapping: a =", a, ", b =", b);
[a, b] = [b, a]; // Swapping values
console.log("After swapping: a =", a, ", b =", b);




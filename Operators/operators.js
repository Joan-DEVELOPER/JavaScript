// Operators example in JavaScript
// -------------------------------

// Operators in JavaScript are reserved characters used to perform operations on values.

// <---- Arithmetic Operators ---->

// To add values use "+"
let initialNumber = 10;

// Increase value by 10
let increasedNumber = initialNumber + 10;

// Decrease value by 10
let decreasedNumber = initialNumber - 10;

// Multiply values
let multiplied = initialNumber * 20;

// Multiply variables together
multiplied = multiplied * decreasedNumber;

// Exponentiation (**)
let exponential = initialNumber ** 2;

// Division
let divided = initialNumber / 2;

// Remainder (modulus)
let remainder = initialNumber % 2; // returns 0 if even, 1 if odd

// Increment / Decrement
let incremental = ++initialNumber; // pre-increment
let decremental = --initialNumber; // pre-decrement

// Combine different types (string + number)
let mixed = "Current number is " + decremental;

// <---- Comparation operators ---->
// This type of operators compare two or more values and return true or false, depending of the result

//== compares only the value
//=== compares the value and the type
//!= checks if the value is different of another one
//!== compares the value and the type are different of another one
//> checks if the first of two values is bigger than the second
//< checks if the first of two values is smaller than the second

//>= checks if the first of two values is bigger or equal than the second
//<= checks if the first of two values is smaller or equal than the second

// <---- Logic operators ---->
//&& //Login 'and' (both need to be true)
//|| // Logical OR (at least one must be true)
//! // Logical NOT (negates the value)

// <---- Asignation operators ---->
//= // basic assignment
// += // add and assign
// -= // subtract and assign
// *= // multiply and assign
// /= // divide and assign
// %= // modulo and assign
// **= // exponentiate and assign
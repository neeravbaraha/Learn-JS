//2.	Use a symbol as an object property.


let mySymbol = Symbol('mySymbol');

// Create an object
let obj = {};

// Use the symbol as an object property
obj[mySymbol] = 'This is a unique value';

console.log(obj[mySymbol]);  // Output: This is a unique value

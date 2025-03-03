//swapping without using temporary variable.

let a= 5;
let b=20;

console.log("Before Swapping");
console.log("a=",a);
console.log("b=",b);

//logic behind
a=a+b;
b=a-b;
a=a-b;
console.log("After Swapping");
console.log("a=",a);
console.log("b=",b);
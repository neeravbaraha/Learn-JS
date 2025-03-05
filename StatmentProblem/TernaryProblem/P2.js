//2.	Use a ternary operator to determine if a person is eligible to vote (age >= 18).

let age=parseInt(prompt("Enter the age:"));
let checkAge=(age>=18?"Can vote":"Can't Vote");
console.log(checkAge);
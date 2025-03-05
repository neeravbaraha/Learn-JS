//5.	Create a grading system using if-else, switch-case, and ternary operator for marks input.

let marks = parseInt(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else if (marks >= 50) {
    console.log("Grade: D");
} else if (marks >= 0) {
    console.log("Grade: F (Fail)");
} else {
    console.log("Invalid Marks! Enter a number between 0 and 100.");
}

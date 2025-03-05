//5.	Create a grading system using switch-case, and ternary operator for marks input.

let marks = parseInt(prompt("Enter your marks:"));

switch (true) {
    case (marks >= 90 && marks <= 100):
        console.log("Grade: A+");
        break;
    case (marks >= 80):
        console.log("Grade: A");
        break;
    case (marks >= 70):
        console.log("Grade: B");
        break;
    case (marks >= 60):
        console.log("Grade: C");
        break;
    case (marks >= 50):
        console.log("Grade: D");
        break;
    case (marks >= 0):
        console.log("Grade: F (Fail)");
        break;
    default:
        console.log("Invalid Marks! Enter a number between 0 and 100.");
}

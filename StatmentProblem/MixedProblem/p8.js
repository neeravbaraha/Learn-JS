//5.	Create a grading system using ternary operator for marks input.


let marks = parseInt(prompt("Enter your marks:"));

let grade = (marks >= 90 && marks <= 100) ? "A+" :
            (marks >= 80) ? "A" :
            (marks >= 70) ? "B" :
            (marks >= 60) ? "C" :
            (marks >= 50) ? "D" :
            (marks >= 0) ? "F (Fail)" :
            "Invalid Marks! Enter a number between 0 and 100.";

console.log(`Grade: ${grade}`);

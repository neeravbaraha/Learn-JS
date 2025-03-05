//3.	Take user input for marks and assign grades (A, B, C, D, F).

let userInput=parseInt(prompt("Enter num:"));

let grade;
if(userInput>=90){
grade="A"
}
else if(userInput>=80){
grade="B"
}
else if(userInput>=70){
    grade="C"
}
else if(userInput>=60){
    grade="D"
}
else if(userInput>=50){
    grade="E"
}
else{ 
grade-"F"
}

console.log(`Your grade is,${grade}`);
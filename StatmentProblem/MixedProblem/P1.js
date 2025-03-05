// 1.	Write a program that takes an integer input and:
// o	If it's divisible by 3, print "Fizz".
// o	If it's divisible by 5, print "Buzz".
// o	If it's divisible by both, print "FizzBuzz".
// o	Otherwise, print the number.
//using switch
let int=parseInt(prompt("Enter the num"));

switch(true){

    //put the  both condition first cause it checks the both
    case((int%3===0)&&(int%5===0)):
    console.log("FizzBuzz");
    break;
    case (int%3===0):
    console.log("Fizz");
    break;
    case (int%5===0):
    console.log("Buzz");
    break;
    
    default:
        console.log(int);
 
}

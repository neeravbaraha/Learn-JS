// 1.	Write a program that takes an integer input and:
// o	If it's divisible by 3, print "Fizz".
// o	If it's divisible by 5, print "Buzz".
// o	If it's divisible by both, print "FizzBuzz".
// o	Otherwise, print the number.
//using if else statement

let int=parseInt(prompt("Enter the num"));
if((int%3===0)&&(int%5===0)){
    console.log("Fizz");
}
else if(int%3===0){
    console.log("Buzz");
}
else if(int%5===0){
    console.log("FizzBuzz");
}
else{
    console.log(int);
}
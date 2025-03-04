//4.	Create a program that checks if a given number is divisible by both 3 and 5.

function diviCheck(num){
    if(num%3==0 && num%5==0){
        console.log(num," is divisible by 3 and 5");

    }
    else{
        console.log(num ," is not divisible");
    }
}
diviCheck(12);
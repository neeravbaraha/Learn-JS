//2.	Write a program that checks whether a number is even or odd.

function checkEvenOdd(num){
    if(num%2===0){
        return "even";
    }
    else{
        return "odd";
    }
}
console.log(checkEvenOdd(2));//even
console.log(checkEvenOdd(3));//odd


//1.	Write a function that checks if a number is positive, negative, or zero.

function checkNum(num){
    if(num<0){
        console.log("Negative");
    }
    else if(num==0){
        console.log("zero");
    }
    else{
        console.log("Positive");
    }
}
checkNum(0);
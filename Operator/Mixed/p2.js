//2.	Create a function that checks if a given number is both even and divisible by 4.
function checkNum(num){
    if(num%2==0 && num%4==0){
        console.log("the num is even and divisible by 4");
    }
    else{
        console.log("might be even and doesnot divisible by 4")
    }
}

checkNum(2);
checkNum(8);
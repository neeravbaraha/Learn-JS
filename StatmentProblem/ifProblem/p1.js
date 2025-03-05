//1.	Check if a number is positive, negative, or zero.

function checkNum(num){
    if(num<0){
        return "-ve";
    }
    else if(num>0){
        return "+ve";
    }
    else{
        return "0";
    }
}
console.log(checkNum(-9))
console.log(checkNum(0))
console.log(checkNum(8))

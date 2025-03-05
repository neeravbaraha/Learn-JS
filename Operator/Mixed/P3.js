//3.	Write a function that checks if a number is prime by checking for divisibility from 2 to n-1.

function checPrime(num){
    if(num<2){
        return false;
    }
    for (i=2;i<num;i++){
        if(num%i==0){
            return false;
        }
        return true;
    }

}
console.log(checPrime(6));

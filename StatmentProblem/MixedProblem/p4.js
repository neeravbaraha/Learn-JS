//3.	Write a program that takes a character input and checks if it's uppercase, lowercase, or a number using if-else.

function checkChar(char){
    if(char===char.toUpperCase()){
        console.log("UpperCase");
    }
    else{
        console.log("LowerCase");
    }
}

checkChar("A");
checkChar("a");
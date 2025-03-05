//4.	Create a simple calculator using switch-case (addition, subtraction, multiplication, division).

let a=parseInt(prompt("Enter the number for a"));
let opt=prompt();
let b=parseInt(prompt("Enter ther number for b"));


switch(opt){
    case "+":
    console.log(a+b);
    break;

    case "-":
    console.log(a-b);
    break;
    
    case "*":
    console.log(a*b);
    break;

    case "/":
    console.log(a/b);
    break;
    
    default:
        console.log("for now only we can do add,sub,multiply,divide");
}
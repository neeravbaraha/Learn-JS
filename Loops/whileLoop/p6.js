//keep asking the user until they type exit

let input;
while(true){
    input=prompt("Enter the input('type exit')");
    if(input.toLowerCase()==='exit'){
    console.log("Exiting....");
    break;
    }

    console.log("you enter",input);

}
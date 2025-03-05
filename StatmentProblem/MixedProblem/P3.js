//2.	Use switch-case to create a simple menu where a user selects options (1-4) for food items.

function checkMenu(num){
    switch(num){
        case 1:
        console.log("pizza");
        break;
        case 2:
        console.log("burger");
        break;
        case 3:
        console.log("milkshake");
        break;
        case 4: 
        console.log("Biryani");
        break;
        default:
        console.log("we have only 4 option");
    }
}

checkMenu(4);
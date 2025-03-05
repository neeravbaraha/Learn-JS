//2.	Create a program that takes a month number (1-12) and prints the corresponding month name.

function checkMonth(month){
    switch(month){
        case 1:
            console.log("Jan");
        break;
        case 2:
            console.log("Feb");
        break;
        case 3:
            console.log("Mar");
        break;
        case 4:
            console.log("Apr");
        break;
        case 5:
            console.log("May");
        break;
        case 6:
            console.log("Jun");
        break;
        case 7:
            console.log("Jul");
        break;
        case 8:
            console.log("Aug");
        break;
        case 9:
            console.log("Sep");
        break;
        case 10:
            console.log("Oct");
        break;
        case 11:
            console.log("Nov");
        break;
        case 12:
            console.log("Dec");
        break;

        default:
            console.log("There are 12 months in a week so please type between 12")
    }
}


checkMonth(8); //aug
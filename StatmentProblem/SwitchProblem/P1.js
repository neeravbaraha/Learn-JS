//1.	Write a program to print the day of the week using switch-case.

function dayInWeek(day){
    switch(day){
        case 1:
            console.log("Sunday");
        break;
        case 2:
            console.log("Monday");
        break;

        case 3:
            console.log("Tuesday");
        break;

        case 4:
            console.log("Wednesday");
        break;

        case 5:
            console.log("Thursday");
        break;

        case 6:
            console.log("Friday");
        break;

        case 7:
            console.log("Saturday");
        break;
        default:
            console.log("there are only 7days in a week so type only 3 number");

    }
}

dayInWeek(1);
dayInWeek(2);
dayInWeek(3);
dayInWeek(4);
dayInWeek(5);
dayInWeek(6);
dayInWeek(7);
dayInWeek(8);



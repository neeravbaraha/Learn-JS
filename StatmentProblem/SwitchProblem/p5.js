//5.	Write a program to display the number of days in a given month (consider leap years for February).

function displayYear(month,year){
switch(month){
   case 2:
    return (year%4===0&&year%100!==0)||(year%400===0)?29:28;
    //break is not used when we use return statement

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 11:
    return "31";
    //break is not used when we use return statement

    case 4:
    case 6:
    case 9:
    case 12:
    return "30";
   //break is not used when we use return statement

}

}
let month=2,year=2000; //this will take the value
let day=displayYear(month,year); // this will call the function with value taken from the month variable
console.log(`${year} and month ${month} has ${day} days `)
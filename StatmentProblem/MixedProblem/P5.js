//4.	Use a ternary operator to check whether a given year is a leap year or not.

function checkYear(year){
    ((year%4===0&&year%100!==0)||year%400===0)?console.log("LeapYear"):console.log("Not a leap year");
}
checkYear(2000);
checkYear(2003);
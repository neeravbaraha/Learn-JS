//5.	Write a program to check if a year is a leap year or not.

let year=parseInt(prompt("Enter The num:"));

// if year is divisible by 4 but not by 100 or divisible by 400 is considered as leap year

if((year%4===0 && year%100!==0)|| year%400===0){
console.log(`${year} is leap year`);
}
else{
    console.log(`${year} is not leap year`);
}
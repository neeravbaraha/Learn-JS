//how you define number;

let num=5.78932345;

//toFixed(parameter) is used to fixed the digiti
console.log(num.toFixed(2)); // it should give you by rounding off the last two digit


//toPrecision(parameter) is used to fixed the digit
console.log(num.toPrecision(3)); // it will provide you the precise data of 3

//isInteger is used to check wheather it is a integer or not
console.log(Number.isInteger(32)); // it should print true cause 32 is a number

// .ParseFloat  convert anystring to num;
console.log(Number.parseFloat("332")); //convert the string "332" to 332

// .parseInt extract anyInteger value from string
console.log(Number.parseInt("123ndhahufh")); //give the result of 123


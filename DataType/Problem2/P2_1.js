//1.	Declare variables of all primitive data types and log their values.

let str="Hello World"; // str variable has a value hello world
console.log(str); // it should print hello world
console.log(typeof(str)); // it should print datatype i.e string

let num=13; //integer is declared
console.log(num); //13 should printed
console.log(typeof(num)); //number should be printed here

let isBool=true; //boolean is create
console.log(isBool);//true should be printed here
isBool=false; //re assignment value as false
console.log(isBool); //false should be printed
console.log(typeof(isBool)); //boolean should be printed

let x=null; // null value
console.log(x); // print null
console.log(typeof(x)); //print an object because null is an object

let y; //no defined value is given
console.log(y);// undefined
console.log(typeof(y)); //undefined

let id=Symbol();
console.log(id); // symbol
console.log(typeof(id));//symbol

let bigInt=900719340033232237n;
console.log(bigInt);
console.log(typeof(bigInt));
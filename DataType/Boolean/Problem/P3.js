//3.	Convert "false" (string) to a boolean.
let bolean="false";
let conVal=Boolean(bolean);
console.log(conVal);// true
console.log(typeof(conVal));//boolean

//right way to convert "false" =false & "true"= true;

let anBool="false"
let updBool=anBool==="true";
console.log(updBool);
console.log(typeof(updBool));

//using JSON.parse();

let str="false";
let UpdStr=JSON.parse(str.toLowerCase());
console.log(UpdStr);
console.log(typeof(UpdStr));

//using ternary operator;

let str_u="false";
let boolStr= str_u.toLowerCase()==="true"?true:false;
console.log(boolStr);
console.log(typeof(boolStr));

//using object lookup

let objStr="false";
let objMapBool={"true":true,"false":false};
let boolVal=objMapBool[objStr.toLowerCase()];
console.log(boolVal);
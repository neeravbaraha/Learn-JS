//5.	Handle null values safely in calculations.

let val=null;

if(val!==null && val!==undefined){
    val =+ 10;
}
else{
    console.log("null and undefined is used");
}

//using ternary

console.log(val!==null && val!==undefined?val+=10:"Null&undefined is used");
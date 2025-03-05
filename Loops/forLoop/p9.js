// reversed with loops

let str=prompt("Enter string");
let revStr='';

for(let i=str.length-1;i>=0;i--){
    revStr+=str[i];

}

console.log(revStr);
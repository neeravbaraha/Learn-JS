//finding greatest divison common using while loop

function gdc(a,b){
while(b!==0){
    [a,b]=[b,a%b];
}
return a;
}
console.log(gdc(18,32));
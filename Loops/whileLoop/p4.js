// finding GDC euclidean algorithm

function gdc(a,b){
    return b===0?a:gdc(b,a%b);
}
console.log(gdc(18,14));
//factorial finding

function fact (n){
    let res=1;
    for(i=2;i<=n;i++){
        res*=i;
    }
    return res;
}
console.log(fact(3));
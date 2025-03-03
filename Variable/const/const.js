const z=10;
console.log(z)
//z=10 is not allowed cause redeclaration is not allowed 

if(true){
    const z=4; // this z can be declared because it is blocked scoped
    console.log(z); //z should print 4
}
console.log(z); //z should print 10 
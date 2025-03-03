let y=10; //declare variable y using let variable y=10
console.log(y); //should print 10
//let y=30 this cannot be done because redeclaration cannnot be done
y=20;// Reassignment done
console.log(y); //should print 20;

//block scope means with in a block same ame can be declared

if(true){
    let y=40;
    console.log(y);
}

console.log(y);
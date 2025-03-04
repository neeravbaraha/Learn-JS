//creating a symbol
let user=Symbol('mySymbol');

let obj={
    [user]:"hidden",
    name:"nirab"
};
console.log(obj[user]);
console.log(obj.name);

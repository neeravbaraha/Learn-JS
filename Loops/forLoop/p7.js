//4.	Generate a multiplication table for a given number.

let user=parseInt(prompt("Enter number for table"));
for(let i=1;i<=10;i++){
    console.log(`${user}x${i}=${user*i}`);
}

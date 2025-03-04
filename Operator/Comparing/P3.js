//3.	Write a function that checks if a user’s age allows them to vote (must be 18 or older).

function voteEle(age){
    if(age>=18){
        console.log("You can vote");
    }
    else{
        console.log("You are not eligible to vote");
    }
}

voteEle(17);
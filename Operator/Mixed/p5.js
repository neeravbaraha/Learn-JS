//1.	Create a program that calculates the discount price of an item (10% discount if price is over 100) and prints whether the price is below 100 or eligible for a discount.

function disApplicable(price){
if(price>100){
    let discount=0.1*price;
    console.log("Discount:",discount);
    let pAD=price-discount;
    console.log("price after discount:",pAD);
}
else{
    console.log("price:",price)
}
}

disApplicable(300);
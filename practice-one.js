/*Write a program to calculate the total price of your 
phone purchase. You will keep purchasing phones (hint: loop!) 
until you run out of money in your bank account.
You’ll also buy accessories for each phone as long as your purchase amount
is below your mental spending threshold.*/

const tax_rate = 0.08;
const accessories = 20;
const phone = 50;
var bankAccount = 500;
var phonePrice = accessories + tax_rate + phone;

while (phonePrice < bankAccount){
    console.log("The price is " + "£" + phonePrice.toFixed(2));
    phonePrice= phonePrice + phone;
}

/* Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..)
covered in “Input” on page 6. You may prompt the user for their bank account balance, for example. */

const tax_rate = 0.08;
const accessories = prompt("How much are the accessories?");
const phone = prompt("How much is your phone?");
var bankAccount = prompt("How much is in your bank account?")
var phonePrice = accessories + tax_rate + phone;

while (phonePrice < bankAccount){
    console.log("The price is " + "£" + phonePrice.toFixed(2));
    phonePrice = phonePrice + phone;
}

// could make a program to work out monthly bills with input prompts 
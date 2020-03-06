/*The current application is prompting asking how much money 
the user has. Once the user inputs the amount, we need to 
console.log one of the following answers:

If the user has more than $100, we answer: "Give me your money!"
If the user has more than $50, we answer: "Buy me some coffee 
you cheap!"
If the user has less or equal than $50, we answer: "You are a 
poor guy, go away!"

Hint: 
Use an If/else statement to check the value of the "total" 
variable.*/

var total = window.prompt('How much money do you have in your pocket');

//your code here

if (total > 100){
  console.log("Give me your money!");}

else if (total > 50) {
  console.log("Buy me some coffee you cheap!");}
  
else if (total <= 50) {
  console.log("You are a poor guy, go away!");}
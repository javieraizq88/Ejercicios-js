/*Here is a table of prices for a wedding catering company:

Up to 50 people                     $4,000
Up to 100 people                   $10,000
Up to 200 people                   $15,000
More than 200 people           $20,000

Instructions
Please write an algorithm that prompts the user for the number 
of people attending their wedding and prints the corresponding 
price in the console.

For example, if the user says that 20 people are attending to 
the wedding, it must cost $4,000 dollars.

Hint
Use if/else to divide your code and set the value of the price 
variable the right way.*/


let userInput = prompt('How many people are coming to your wedding?');

// your code here

let number = userInput
if (number <= 50) price = 4000;
else if (number  <= 100) price = 10000;
else if (number <= 200) price = 15000;
else if (number > 200) price = 20000;

console.log('Your wedding will cost '+price+' dollars');
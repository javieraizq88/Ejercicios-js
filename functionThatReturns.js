/*Is a very good practice that all functions return something, even if it is "null"; if your 
functions return something you can then create algorithms that use several functions at the 
same time. For example, in this particular case we have two functions available:

dollarToEuro: that calculates the value in euros of a given value in dollars.
autoToYen: calculates the value in yen of a given value in euros.

Instructions
Using the two functions available, calculate the value of 137 dollars in yen.

Hint: Working backwards, our expected value is in yen. Our available function euroToYen will 
provide that, and to get to euro we will use the available function dollarToEuro.*/

var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ******///


console.log(euroToYen(dollarToEuro(137)));




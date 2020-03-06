/*Okay, now change whatever you need to change to make the algorithm print random 
integers between 1 and 6.

HINT: 
- It should print between 1 and 6, not between 0 and 6.
- This exercise is super simple, don't over complicate things....*/

function getRandomInt()
{
	var randomNumber = Math.floor(Math.random()*6+1);
	return randomNumber;
}
console.log(getRandomInt());
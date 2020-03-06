/*Imagine your software is running the inventory of a shoe store, a client needs to 
know in what colors do you have a particular shoe.

Instructions
Complete this switch statement with 3 possible colors: Red, Green and Blue.

The function needs to return true if the color is available or false if the color is 
not available.

Hint:
http://www.w3schools.com/js/js_switch.asp*/


function getColor(selection)
{
selection = selection.trim().toLowerCase();
  
switch(selection){
    //Add more options here
    case "red":
      return true
      break;
    case "green":
      return true
      break;
    case "blue":
      return true
      break;
    default :
        return false;//return false because the user pick a unavailable color
    break;               
}
}

var colorname = window.prompt('What color do you want?');
var isAvailable = getColor(colorname);
if(isAvailable) console.log('Good news! That color is available');
else console.log('We are sorry, that color is not available');
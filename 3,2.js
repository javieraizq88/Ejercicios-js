/*Please now create a function called generateRandom that 
generates a random number between 0 and 9 every time it is 
called.*/

function generateRandom(){
    return Math.floor(Math.random() * 9 + 1);
    
  }
  console.log(generateRandom());

  //this line of code to take the number from the user through a popup window 
  let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

  // starting the loop from 1 till the number the user enters 

  for ( i = 1 ; i <= answer ; i++){
 
  
  if ( i % 3 === 0 && i % 5 === 0)
  {
     console.log("FizzBuzz");
  }

 else if ( i % 3 === 0)
 {
     console.log("Fizz");
  }
  
 else if (i % 5 === 0)
 {
     console.log("Buzz");
  }
  else {
     console.log(i);
  }
 }
function incrementUntil100(num) {
    // Check if the given number is less than 100
    if (num < 100) {
      // Increment the number by 1 and return it
      return num + 1;
    }
  }
  
  function decrementUntil0(num) {
      // Check if the given number is greater than 0
      if (num > 0) {
          // Decrement the number by 1 and return it
          return num - 1;
      }
  }
  
  let num = 95;
  let incrementIntervalID = setInterval(function() {
    // Increment the number by 1 using the incrementUntil100() function
    num = incrementUntil100(num);
    if (num === undefined){
      clearInterval(incrementIntervalID);
    } else {
      console.log(num);
    }
  }, 1000);
  
  let decrementIntervalID = setInterval(function() {
    // Increment the number by 1 using the incrementUntil100() function
    num = decrementUntil0(num);
    if (num === undefined){
      clearInterval(decrementIntervalID);
    } else {
      console.log(num);
    }
  }, 1000);
  
  function stop() {
    // Stop the interval by calling clearInterval() with the interval ID
    clearInterval(intervalID);
  }
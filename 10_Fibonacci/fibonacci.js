const fibonacci = function(number) {



  if (number < 0) return "OOPS";
  if (number === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < number; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
    // if (number < 1) {
    //     return "Oops";
    //   }
    
    //   function recursion(length, originalLength, previous, next) {
    //     if (length === originalLength)
    //       return previous + next;
    
    //     return recursion(length + 1, originalLength, next, previous + next);
    //   }
    
    //   return recursion(1, number - 1, 0, 1);
    }



 
   
// Do not edit below this line
module.exports = fibonacci;

const fibonacci = function(number) {
    if (number < 1) {
        return "Oops";
      }
    
      function recursion(length, originalLength, previous, next) {
        if (length === originalLength)
          return previous + next;
    
        return recursion(length + 1, originalLength, next, previous + next);
      }
    
      return recursion(1, number - 1, 0, 1);
    }


console.log(fibonacci(4)); 
console.log(fibonacci(6)); 
console.log(fibonacci(10)); 
console.log(fibonacci(15)); 
console.log(fibonacci(25)); 
console.log(fibonacci(-25));
console.log(fibonacci("1"));
console.log(fibonacci("2"));
console.log(fibonacci("8"));   
 
   
// Do not edit below this line
module.exports = fibonacci;

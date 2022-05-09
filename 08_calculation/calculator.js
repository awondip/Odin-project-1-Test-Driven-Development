const add = function(a,b) {
  return a + b;

};


const subtract = function( a , b ) {
  return a - b;

};


const sum = function(array) {
  return array.reduce((first, second) => first + second, 0);
  
};

const multiply = function(array) {
  return array.length
  ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
  : 0;

 
 };

const power = function(a,b) {
  return a ** b;	
};


const factorial = function(a) {
  if (a === 0) return 1

  let product = 1;
  for (let i = a; i > 0; i--) {
    product *= i;
  }
	return product
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

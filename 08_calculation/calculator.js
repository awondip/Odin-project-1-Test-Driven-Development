const add = function(a, b, c) {
    let firstAddition = a + a;

    console.log(firstAddition);

    let secondAddition = b + b;

    console.log(secondAddition);

    let thirdAddition = b + c
    console.log(thirdAddition)

};
add(0, 2, 6)

const subtract = function( a , b ) {
  let substraction = b - a;
  console.log(substraction)
	
};

subtract(4, 10)

const sum = function(a, b , c , d, f) {
  let sumArray = Array.from(arguments)

  let firstSum = sumArray[0] ;
  console.log(firstSum);
   
  let secondSum = sumArray[4];
  console.log(secondSum);
  
  let thirdSum = sumArray[4] + sumArray[6];
  console.log(thirdSum);

  let fourthSum = sumArray[1] + sumArray[2] + sumArray[3] +sumArray[4] +sumArray[5]

  console.log(fourthSum)
	
};

sum (0, 1, 3, 5, 7, 9, 11)

const multiply = function( a, b, c, d, e, f, g) {

  let multiplyArray = Array.from(arguments)

  let  firstMutiplication  =  multiplyArray[0] * multiplyArray[1] 
  console.log(firstMutiplication);


    let secondMultiplication  = multiplyArray[0] * multiplyArray[1] *  multiplyArray[2] * multiplyArray[3] * multiplyArray[4] * multiplyArray[5] * multiplyArray[6] ;
    console.log(secondMultiplication);


 };
multiply(2, 4, 6,  8, 10, 12, 14)

const power = function(a,b) {
  let powerArray = Array.from(arguments)

  let firstPower = powerArray[1] ** powerArray[0]
   
  console.log(firstPower)
	
};
power(3, 4)

const factorial = function(a, b, c, d) {
  if (a=== 0) {console.log() }

  let product = 1;
  for (let i = a; i > 0; i--) {
    product *= i;
  }
   console.log(product);

   if (c === 0) {console.log() }

   let prod = 1;
   for (let i = c; i > 0; i--) {
     prod *= i;
   }
    console.log(prod);

    if (d === 0) {console.log() }

    let fact = 1;
    for (let i = d; i > 0; i--) {
      fact *= i;
    }
     console.log(fact);
  
	
};
factorial(0, 2, 5, 10)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

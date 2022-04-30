const sumAll = function( a, b) {

    const sumArray = Array.from(arguments)
    
     
    for (let i = a; i < sumArray.length; i++) {

        let  sum = sumArray[i] + sumArray[i]

        return sum;        
    }
    

};
  console.log(sumAll(1, 5))
// Do not edit below this line
module.exports = sumAll;

const removeFromArray = function(a, b, c, d) {

    const newArray = Array.from(arguments);

    for(let i=0; i<= newArray.length; i++){

        if (newArray[i] === 3){

            newArray.splice(i, 1)


        }
    }
   return newArray;   
};
 console.log(removeFromArray(1, 2, 3, 4))

// Do not edit below this line
module.exports = removeFromArray;

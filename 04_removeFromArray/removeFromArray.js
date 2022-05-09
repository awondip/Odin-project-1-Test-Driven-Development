const removeFromArray = function(array) {

    const newArray = Array.from(arguments)
    newArray.slice(0, 1);
    newArray.forEach(element =>{
        let arrayNum = array.indexOf(element)

        if (arrayNum > -1) {

            array.splice(arrayNum, 1)

        }
    } )
   
   return array;   
};
 

// Do not edit below this line
module.exports = removeFromArray;

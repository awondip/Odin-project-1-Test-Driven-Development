
//Reversing a string
const reverseString = function(string) {
    let newString = "" ;
    string = "hello there";
    let stringLength = string.length - 1;

    for (let i = stringLength; i >= 0; i--) {  

       newString += string[i];
    }
    return newString;

};
 console.log(reverseString());

// Do not edit below this line
module.exports = reverseString;

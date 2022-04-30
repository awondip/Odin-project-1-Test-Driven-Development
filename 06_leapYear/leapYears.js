const leapYears = function(year) {

        if (year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0)){
            //console.log(`it is a leap year ${years}`);

            return true;
            
        }
        else {
            //console.log( "is not a leap year")
            return false;
        }
    
    
    
    



};
console.log (leapYears(2000))
console.log (leapYears(1895))

// Do not edit below this line
module.exports = leapYears;

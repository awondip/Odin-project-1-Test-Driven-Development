// converting temperature from fahrenheit to celcius

const ftoc = function(farhenheit ) {
  const fTemp = farhenheit;
  const ftoCel = Math.round((farhenheit - 32)* (5/ 9) * 10) / 10;
  const message = ftoCel;
  return message

};



// converting temperature from celcius to farhenheit
const ctof = function(celcius) {
  const cTemp = celcius;
  const ctoFahr = Math.round(((celcius * 9 / 5) + 32) * 10) /10;
  return ctoFahr;

};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

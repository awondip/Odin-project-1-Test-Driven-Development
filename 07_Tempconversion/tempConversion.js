// converting temperature from fahrenheit to celcius

const ftoc = function(farhenheit ) {
  const fTemp = farhenheit;
  const ftoCel = (farhenheit - 32)* 9 / 5 ;
  const message = `${fTemp}\xB0C is ${ftoCel} \xB0F.`;
  console.log(message);

};
ftoc(32)


// converting temperature from celcius to farhenheit
const ctof = function(celcius) {
  const cTemp = celcius;
  const ctoFahr = celcius * 9 / 5 + 32;
  const message = `${cTemp}\xB0C is ${ctoFahr} \xB0F.`;
  console.log(message);

};
ctof(0)

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

const palindromes = function (value) {

  const REGEX = /[\W_]/g;

  const cleanValue = value.toLowerCase().replace(REGEX, "");
  const { length } = cleanValue;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (cleanValue[i] !== cleanValue[length - 1 - i]) {

       return false;
    }
  }
   return  true;
 
};

palindromes("racerca")
palindromes("racerca!")
palindromes("Racercar!")
palindromes('A car, a man, a maraca.')
palindromes('Animal loots foliated detail of stool lamina.')
palindromes('ZZZZ car, a man, a maracaz.')


// Do not edit below this line
module.exports = palindromes;

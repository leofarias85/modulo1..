'use strict';

function BinarioADecimal(num) {
   let decimal = parseInt(num, 2);

   return decimal;
 }


function DecimalABinario(num) {
   if (num === 0) {
      return '0';
    }
  
    let binario = '';
    while (num > 0) {
      binario = (num % 2) + binario;
      num = Math.floor(num/ 2);
    }
  
    return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};

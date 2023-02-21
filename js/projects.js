// Palindrome Checker

function palindrome(str) {

    str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
    return str === str.split('').reverse().join('');
  }
  
  console.log(palindrome("eye"));


// Roman Numeral Converter

  function convertToRoman(num) {
    // Define the Roman numeral symbols and their corresponding values
    const romanSymbols = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
  
    let romanNumeral = '';
  
    // Iterate through the Roman numeral symbols
    for (let symbol in romanSymbols) {
      while (num >= romanSymbols[symbol]) {
        romanNumeral += symbol;
        num -= romanSymbols[symbol];
      }
    }
  
    return romanNumeral;
  }
  
  convertToRoman(36);
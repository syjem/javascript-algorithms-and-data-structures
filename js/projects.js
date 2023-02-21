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
  
  console.log(convertToRoman(36));


// Caesars Cipher

function rot13(str) {

    function shiftLetter(letter) {  
  
      let code = letter.charCodeAt(0);  
      if (code >= 65 && code <= 90) {  
        code = code - 13 < 65 ? code + 13 : code - 13;
      }  
      return String.fromCharCode(code);
    }
    let decodedArray = str.split('').map(function(char) {  
      return shiftLetter(char);
    });
    return decodedArray.join('');
  }
  
  console.log(rot13("SERR PBQR PNZC"));



// Telephone Number Validator

function telephoneCheck(str) {
    let phoneCheck = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
   return phoneCheck.test(str);
 }
 
 console.log(telephoneCheck("555-555-5555"));



//  Cash Register

function checkCashRegister(price, cash, cid) {
    const currencyValues = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
    
    let changeDue = cash - price;
    let cidTotal = 0;
    let change = [];
    
    for (let i = 0; i < cid.length; i++) {
      cidTotal += cid[i][1];
    }
    
    if (cidTotal < changeDue) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    
    if (cidTotal === changeDue) {
      return {status: "CLOSED", change: cid};
    }
    
    for (let i = cid.length - 1; i >= 0; i--) {
      let currencyName = cid[i][0];
      let currencyValue = currencyValues[currencyName];
      let currencyAvailable = cid[i][1];
      let currencyUsed = 0;
      let currencyCount = 0;
      while (changeDue >= currencyValue && currencyAvailable > 0) {
        changeDue -= currencyValue;
        changeDue = Math.round(changeDue * 100) / 100;
        currencyAvailable -= currencyValue;
        currencyUsed += currencyValue;
        currencyCount++;
      }
      if (currencyCount > 0) {
        change.push([currencyName, currencyUsed]);
      }
    }
    
    if (changeDue > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    
    return {status: "OPEN", change: change};
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// Palindrome Checker

function palindrome(str) {

    str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    
    return str === str.split('').reverse().join('');
  }
  
  console.log(palindrome("eye"));

// Algorithm Scripting


// Reverse String

function reversedString(str) {
    let string = str;
    let reverse = string.split("").reverse().join("");
    return(reverse);
}

console.log(reversedString("Hello World"));


// Factorial of a number

function factorial(n) {
    if(n < 0) return undefined;
    if(n===0) return 1;

    let result = 1;
    for(let i =1; i<=n; i++) {
        result *= i;
    }
    return(result);
}
console.log(factorial(5));



// Find the Longest Word in a String

    function wordLength(str) {
        let words = str.split(" ");
        let longestWord = 0;

        for(let word of words) {
            longestWord = Math.max(longestWord, word.length);
        }

        return(longestWord);
    }
    console.log(wordLength("The quick brown fox jumped over the lazy dog"));



    // Return Largest Numbers in Arrays

    function largestOfFour(arr) {
        const results = [];
         for (let i = 0; i < arr.length; i++) {
           let largestNumber = arr[i][0];
           for (let j = 1; j < arr[i].length; j++) {
             if (arr[i][j] > largestNumber) {
               largestNumber = arr[i][j];
             }
           }
           results[i] = largestNumber;
         }
       
         return results;
       }

       console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
       console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));



    // Confirm the Ending

    function confirmEnding(str, target) {

        return str.slice(-target.length) === target;
    }

    console.log(confirmEnding("Open sesame", "same"));



    // Repeat String

    function repeatStringNumTimes(str, num) {
        let repeat = "";
      
        for(let i=0; i<num; i++) {
          repeat += str;
        }
        return repeat;
      }
     console.log(repeatStringNumTimes("abc", 3));



    //  Truncate a String

    function truncateString(str, num) {

        if(str.length <= num) {
          return str;
        }
        return(str.substring(0, num) + "...");
      } 
      console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
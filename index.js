
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



    // Finders Keepers

    function findElement(arr, func) {
        for (let i = 0; i < arr.length; i++) {
          if (func(arr[i])) {
            return arr[i];
          }
        }
        return undefined;
      }
      console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));



    // Boo Who

    function booWho(bool) {

        if(bool === true | bool === false) {
          return true;
        }
      
        return false;
      } 
      console.log(booWho(null));



    // Title Case a Sentence

    function titleCase(str) {
        let words = str.toLowerCase().split(" ");
        for (let i = 0; i < words.length; i++) {
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
      }
      
      console.log(titleCase("I'm a little tea pot"));




    // Slice And Splice

    function sliceAndSplice(arr1, arr2, n) {
        let result = arr2.slice();
        for (let i = 0; i < arr1.length; i++) {
          result.splice(n, 0, arr1[i]);
          n++;
        }
        return result;
      } 
      console.log(sliceAndSplice([2, 3, 4], [1, 5, 6], 1));



    // Falsy Bouncer
  
  function bouncer(arr) {
    return arr.filter(function(value) {
      return Boolean(value);
    });
    } 
  console.log(bouncer([7, "ate", "", false, 9]));



// Where do I belong?
//  Return the lowest index at which a value (second argument) 
// should be inserted into an array (first argument) once it has 
// been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) {
        return i;
      }
    }
  
    return arr.length;
  }
  
  console.log(getIndexToIns([40, 60], 50));



// Mutation

function mutation(arr) {
    let first = arr[0].toLowerCase();
    let second = arr[1].toLowerCase();
    
    for (let char of second) {
      if (!first.includes(char)) {
        return false;
      }
    }
    return true;
  }
  console.log(mutation(["hello", "hey"]));



// Write a function that splits an array (first argument) 
// into groups the length of size (second argument) 
// and returns them as a two-dimensional array.  

function chunkArrayInGroups(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
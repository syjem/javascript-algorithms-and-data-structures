// Intermediate Algorithm Scripting



// Sum All Numbers in a Range

function sumAll(arr) {

    arr.sort((a, b) => a - b);

    let sum = 0;
    for(let i = arr[0]; i<=arr[1]; i++) {
        sum += i;

    }
    return(sum);
}
console.log(sumAll([1, 4]));



// Diff Two Arrays

function diffArray(arr1, arr2) {
  
    const diff1 = arr1.filter(x => !arr2.includes(x));
    const diff2 = arr2.filter(x => !arr1.includes(x));
    return diff1.concat(diff2);
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));



// Seek and Destroy

function destroyer(arr) {
    // get the arguments object as an array, starting at index 1
    const args = Array.from(arguments).slice(1);
  
    // filter out all elements in the array that are present in the arguments
    return arr.filter(x => !args.includes(x));
  }
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



// Wherefore art thou

function whatIsInAName(collection, source) {
    // get an array of the keys in the source object
    const keys = Object.keys(source);
  
    // filter the collection to include only objects that have matching name and value pairs
    return collection.filter(obj =>
      keys.every(key =>
        obj.hasOwnProperty(key) && obj[key] === source[key]
      )
    );
  }
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
{ last: "Capulet" }));



// Spinal Tap Case

function spinalCase(str) {
    // Replace underscores and spaces with hyphens
    str = str.replace(/[_\s]+/g, '-');
    // Add a hyphen between a lowercase and uppercase letter
    str = str.replace(/([a-z])([A-Z])/g, '$1-$2');
    // Convert to lowercase
    str = str.toLowerCase();
    return str;
  }
console.log(spinalCase('This Is Spinal Tap'));



// Pig Latin

function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = str;
    let consonantCluster = '';
  
    // Check if the first letter is a vowel
    if (vowels.includes(str[0])) {
      newStr += 'way';
    } else {
      // Find the first vowel and move the consonant cluster to the end of the word
      for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
          newStr = str.slice(i) + consonantCluster + 'ay';
          break;
        } else {
          consonantCluster += str[i];
        }
      }
    }

    if (consonantCluster === str) {
        newStr += 'ay';
      }
  
    return newStr;
  }
console.log(translatePigLatin("apple"));
console.log(translatePigLatin("rhythm"));

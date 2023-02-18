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
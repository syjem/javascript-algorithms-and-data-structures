
// Algorithm Scripting

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
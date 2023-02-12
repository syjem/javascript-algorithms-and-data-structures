
// Algorithm Scripting

function reversedString(str) {
    let string = str;
    let reverse = string.split("").reverse().join("");
    return(reverse);
}

console.log(reversedString("Hello World"));
function insertDashes(str) {
    return str
    .split(" ")
    .map(word => word.split("").join("-"))
    .join(" ");
}

/**
* Test Suite 
*/
console.log(insertDashes("aba caba"))

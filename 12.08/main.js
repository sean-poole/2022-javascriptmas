function validTime(str) {
    let arr = str.split(":").map(x => Number(x));
    return arr[0] > 24 || arr[1] > 60 ? false : true;
}

console.log(validTime("13:58"))
console.log(validTime("25:51"))
console.log(validTime("02:76"))

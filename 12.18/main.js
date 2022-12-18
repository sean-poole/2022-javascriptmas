function candies(children, candy) {
    return Math.floor(candy / children) * children;
}


/**
* Test Suite 
*/
const children = 3;
const candy = 10;
console.log(candies(children, candy));
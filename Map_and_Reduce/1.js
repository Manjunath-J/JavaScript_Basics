// Array.map()

/** The map function creates a new array by applying a provided function to each element of the original array.
 *  It doesn't modify the original array but returns a new one. */

const num = [1, 2, 3, 4, 5];
const squareNum = num.map((num) => num ** 2);           // squaring each element
console.log(squareNum); 


// Array.reduce()

/** The reduce function iterates over the elements of an array and accumulates a single result. 
 * It takes a callback function and an initial accumulator value. */

const numbers = [1, 2, 3, 4, 5];
const res = numbers.reduce((acc, val) => acc * val, 1);     // product  of all elements 
console.log(res); 

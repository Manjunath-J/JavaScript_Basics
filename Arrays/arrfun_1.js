// Array Functions

let arr=[1,2,3,4,5,6,7];
console.log(arr);


// returns deleted element
console.log(arr.pop());     //deletes last index : 7
console.log(arr);

console.log(arr.shift());   //delets first index : 1
console.log(arr);

// insert the element
arr.push(11);               //inserts at last index
console.log(arr);

arr.unshift(21);            //inserts at first index
console.log(arr);

let str=["hi","hello","bye","smile"];
console.log(str.toString());            //toString() returns array into STring by seperating (,)

let string=arr.toString();
console.log(string);
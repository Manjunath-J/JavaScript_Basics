// Call Bacl

/** It is a function that is passed as an argument to another function, and is called after the main function has finished its execurion
 */

console.log("Start");
console.log("Outside main function");

function main(callback){
    let a=5,b=4;
    console.log("Inside main function");
    callback(a,b);
    console.log("End main");
}
//Callback function
function callfun(x,y){
    console.log("Inside Call back function");
    console.log("Result: "+(x+y));
}

main(callfun);              //passing function as argument => callback()
console.log("End");
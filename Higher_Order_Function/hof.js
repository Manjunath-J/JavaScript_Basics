// Higher Order FUnction

/** The function which takes one or more function as arguments and returns a function as Result */

function add(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}

// this is higher order function
function result(x,y,operation){
    return operation(x,y);
}

console.log(result(5,2,add));
console.log(result(5,2,mul));
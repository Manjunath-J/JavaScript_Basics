//Hoisting

/** Variable and function declarations are moved to the top of their containing scope during the compilation phase */

//NOTE: Only the Declaration is Hoisted, and not the initialization

//Example -> 1
console.log(a);             // undefined
var a=18;
console.log(a);             // 18

//Example -> 2
print();
function print(){
    console.log("This is Hoisting...");
}

//Example -> 3
console.log(temp);          // undefined
var temp=function (){
    return 10*12;
}
console.log(temp());        // 120
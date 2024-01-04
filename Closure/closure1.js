//Closure.

/** Closure gives you access to an outer function scope from an inner function even after outer function has been executed */

function outer(){
    let a=13;
    return inner;

    //Closure
    function inner(){
        return a+1;
    }
}

let closure=outer();            //return inner() -> closure
console.log(closure());
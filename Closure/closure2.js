//Closure.

/** Closure gives you access to an outer function scope from an inner function even after outer function has been executed */

function outer(name){
    return inner;

    //Closure
    function inner(){
        let str="Hello, "+name;
        return str;
    }
}

let temp=outer("MJ");
console.log(temp());

temp=outer("Johny");
console.log(temp());
//Closure.

function outer(x){

    function sum(y){
        return x+y;
    }

    function product(y){
        return x*y;
    }

    function sub(y){
        return x-y;
    }

    return {
        Addition: sum,
        Subtraction: sub,
        Multiplication: product
    };
}

let result=outer(5);

console.log(result.Addition(3));                //8
console.log(result.Subtraction(2));             //3 
console.log(result.Multiplication(5));          //25
// IIFE ==> Immediately Invoked Function Expression

/** When a Function is declared and executed immediately after its creation */

(function (){
    let x=3, y=2;
    console.log(x*y);
})();


// Parameters can be passed to the IIFE
(function (x,y){
    console.log(x+y);
})(10,20);


//Callback and IIFE
function printHello(){
    console.log("Hello JavaScript...");
}
(function (print){
    print();
})(printHello);


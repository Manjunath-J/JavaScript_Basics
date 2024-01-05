// Call Back

let arr=[1,2,3,4,5];

console.log("Start");

function main(callback){
    console.log("Inside main function");
    setTimeout(function(){arr.forEach(callback)},3000);
    console.log("End main");
}
// Callback function
function callfun(num){
    console.log("Ele: "+num);
}

main(callfun);
console.log("End");


// Output:
/**     Start
        Inside main function
        End main
        End
        Ele: 1
        Ele: 2
        Ele: 3
        Ele: 4
        Ele: 5
 */
// Promise

/** It is an object, that represents the eventual completion or failure of Asynch operation */

let a=32;
let promise=new Promise((resolve,reject)=>{         //promise = pending
    setTimeout(()=>{
        if(even(a)){
            resolve("Even");                            //promise = resolved
        }
        else{
            reject("Odd");                              //promise = rejected
            //displays error
        }
    },4000);
});

// executes only when promise is resolved
promise.then(()=>{
    console.log(a+ " is even");
});

// executes only when promise is rejected
promise.catch(()=>{
    console.log(a+ " is odd");
})

function even(x){
    if(a%2==0)
        return true;
    else
        return false;
}
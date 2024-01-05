// Promise Chain

/** Chaining of multiple Asynch operations using Promises */

function promise(a){
    return new Promise((resolve,reject)=>{         //promise = pending
        setTimeout(()=>{
            if(a){
                console.log(a);
                resolve("Success");   
            }                      
            else
                reject("Error");                             
        },3000);
});
}

// promise chaining
promise(1)
    .then((res)=>{ promise(2)
        .then((res)=>{ promise(3)
            .then((res)=>{ promise(4)
                .then((res)=>{ promise(5)
                })
            })
        })
});
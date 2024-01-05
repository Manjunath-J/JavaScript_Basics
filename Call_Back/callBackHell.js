// Call Back Hell

/** Callback hell occurs when multiple nested callbacks are used
 *  Difficult to read and understand
 */

console.log("Start");

function main(num, hellfun){
    setTimeout(()=>{
        console.log(num);
        if(hellfun)
            hellfun();
    },2000);
}

//CallBack Hell
main(1,()=>{
    main(2,()=>{
        main(3,()=>{
            main(4,()=>{
                main(5,()=>{
                    main(6)
                })
            })
        })
    })
});
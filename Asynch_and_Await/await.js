// Async and Await

/** async is a keyword that is used to declare the function that returns a promise.
 *  await is a keyword used to wait for promise to resolve and used only inside asynch function
 */

function getdata(data){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(data);
            resolve("S");
        },2000);
    })
}

// asynch fuction
async function print(){
    //await => waits for promise to resolve
    console.log("getting data..");
    await getdata(1);
    console.log("getting data..");
    await getdata(2);
    console.log("getting data..");
    await getdata(3);
    console.log("getting data..");
    await getdata(4);
    console.log("getting data..");
    await getdata(5);
}

print();
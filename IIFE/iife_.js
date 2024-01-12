(function(){
    let data=null;

    function getData(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                data={
                    name: "MJ",
                    age: 22,
                    address: "Bengaluru"
                }
                resolve();
            },2000);
        })
    }

    (async function(){
        console.log("Getting data....");
        await getData();
        console.log("Data Recieved: ",data);
    })();
})();

function result(perform){
    return perform(arr,even);
}


function filterArray(arr,operation){
        const result=[];
        for(let val of arr){
            if(operation(val)){
                result.push(val);
            }
        }
        return result;
}

function even(num){
    return num%2==0;
}

const arr=[1,2,3,4,5,6,7,8,9];

const evenArr=result(filterArray);

console.log("Array: ",arr);
console.log("Even Array: ",evenArr)
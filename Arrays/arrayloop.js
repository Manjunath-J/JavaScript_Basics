let char=['a','b','c','d','e','f','g']

//length of an array
console.log(char.length);

//for loop
console.log("For Loop");
for(let i=0;i<char.length;i++){
    console.log(char[i]);
}

//for-of loop
console.log("For-of Loop");
for(let ele of char){
    console.log(ele);
}
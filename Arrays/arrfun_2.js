//Array Functions

let a=[1,2,3,4,5];
let b=[4,5,6,7,8];

//joins two strings
console.log(a.concat(b));           //[ 1,2,3,4,5,4,5,6,7,8 ]


//returns piece of array  => (StartIndex, --EndIndex)
console.log(a.slice(1,3));          //[2,3]
console.log(a.slice(2,4));          //[3,4]
console.log(a.slice(2));            //[3,4,5]


//changes original array  => (StartIndex, DelCount, NewEle....)
a.splice(2,2,101,102);
console.log(a);                     //[ 1,2,101,102,5 ]

a.splice(1,0,8);
console.log(a);                     //[1,8,2,101,102,5]

a.splice(3,2);
console.log(a);                     //[1,8,2,5]
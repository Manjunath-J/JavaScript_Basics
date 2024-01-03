//Asynchronous Code

/** In this setTimeout() is used to make the lines execute before other previous lines */

console.log("line 1");
console.log("line 2");

setTimeout(asynch,3000);        //Delayed by 3 sec

console.log("line 3");
console.log("End");

function asynch(){
    console.log("inside fun-line 1");
    console.log("inside fun-line 2");
}

/** Output 
 *      line 1
        line 2
        line 3
        End
        inside fun-line 1
        inside fun-line 2
*/
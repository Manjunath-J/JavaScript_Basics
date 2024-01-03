//Synchronous Code

console.log("line 1");
console.log("line 2");

synch();

console.log("line 3");
console.log("End");

function synch(){
    console.log("inside fun-line 1");

    console.log("inside fun-line 2");
}

/** Output:
 *      line 1
        line 2
        inside fun-line 1
        inside fun-line 2
        line 3
        End
 */
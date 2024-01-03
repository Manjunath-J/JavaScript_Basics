//Let
/** It is a Local Scope, accessed inside block
 *  It canoot be redeclared, but the value can be changed/updated.
 */

let a=33;
console.log(a);

// let a=11;       cannot redeclared block elements. 

a=13;
console.log(a);
                            //value can be updated.
a="JavaScript";
console.log(a);

/** Output:
 *      33
        13
        JavaScript
 */
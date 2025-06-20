// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// IIFE is used to remove the global scope pollution

// function chai(){
//  console.log(`DB CONNECTED`);
// }
// chai()

/* here function is immediately invoked but the function is 
polluted from the global scope thats why we use IIFE */

// for writing it as a IIFE we have to do this
// apply parenthesis to the whole function
(function chai(){
    console.log(`DB CONNECTED`);
})();
/* in the above command we wrap the whole function in an
parenthesis and the second parenthesis is for execution */
/*inside IIFE func it doesnt knw where to end the context
so we have to put an semicolon in the end of the 2nd
parenthesis */ 

// arrow function in IIFE
// here without name arrow function is working
(() => {
    console.log(`DB CONNECTED TWO`);
})();

// if we want to pass an name then
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("nikhil")
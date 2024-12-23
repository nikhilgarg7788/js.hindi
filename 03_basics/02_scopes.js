// {}   these curly braces are called as scope



let a = 300 // this printing value of outside/inside loop is called 
// blockscopeand global scope
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("inner: ", a);      
}
// console.log(a);
// console.log(b);
/* here nothing is returned in this loop above but then also 
30 is coming as output because we took c as var this is the problem 
with var this is why we sholud ignore var*/
    // console.log(c);


// FOR LOOP
// for(let i = 0; i < Array.length; i++){
//     const element = array[i];
// }

// ................. NESTED SCOPE......................
function one(){
    const username = "nikhil"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
    /* if we comment out this functioncall two() then nothing
    will be executed*/

}
// one()

// we can do this same thing using if else also

if(true){
        const username = "nikhil"
        if(username === "nikhil"){
            const website = "youtube"

            // console.log(username + website);
        }
        // console.log(website);
}
// console.log(username);


// +++++++++++++++++++INTERESTING++++++++++++++++++++++++++++++
/* in this case we are calling function before declaration then 
also its working because here function is declared */
console.log(addOne(5))
function addOne(num){
    return num + 1
}

// we can watch this same thing happening in other ways
/* in this case when we are calling function before declaration
then its showing error because here we declared function inside an variable */

addTwo(5)
const addTwo = function(num){
    return num + 2
}





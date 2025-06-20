// {}   these curly braces are called as scope



let a = 300 // this printing value of outside/inside loop is called 
// blockscope and global scope
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


// -----------------FOR LOOP-----------------------
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

    // here we can access username because two() is inside one()
    // but we cannot access website because two() is inside one()
    // console.log(website);

    two()
    /* if we comment out this functioncall two() then nothing
    will be executed*/

}
// one()

// -----------------IF ELSE-----------------------
// here we can access username because it is inside the scope of if
// but we cannot access website because it is inside the scope of if
// and we are trying to access it outside the scope of if

// const username = "nikhil"
//  we can do this same thing using if else also

if(true){
        const username = "nikhil"
        if(username === "nikhil"){
            const website = "youtube"

            // console.log(username + website);
            // here we can access username and website because both are inside the scope of if
        }
        // console.log(website);
        // here we cannot access website because it is inside the scope of if
}
// console.log(username);
// here we can access username because it is outside the scope of if



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
// this is a function and a  type of expression declared inside a variable
addTwo(5)
const addTwo = function(num){
    return num + 2
}





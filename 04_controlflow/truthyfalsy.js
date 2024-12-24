const userEmail = "n@email.ai"

if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Dont have user Email");
}



//  ++++++++++FALSY VALUES+++++++++++
/*
false, 0, -0, BigInt 0n, "", null, undefined, NaN
all other than these are truthy values */

// +++++++++++TRUTHY VALUES++++++++++
/*
"0", 'false', " ", [], {}, function(){}, 
all these are truthy values 
*/

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// checking for obj
const emptyObj = {}
if(Object.keys(emptyObj).length === 0 ){
    console.log("obj is empty");
}


//  NULLISH COALESCING OPERATOR(??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
// we use this operator bcs when we call from database or use
// firebase or typewriter then we directly get response 
// we get two values so that our wholecode structure get disturbed
// for this purpose this is used

console.log(val1);



// ++++++TERNIARY OPERATOR+++++++++++++++
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")

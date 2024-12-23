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
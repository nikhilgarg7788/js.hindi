//  IF

if(condition){

}
/* If condition is true then the internal code inside the 
 scope is executed */
 /* if the condition is false then we doent go inside the 
 condition */

//  TYPES OF CONDITION COMPARISON
// <,  >,  <=,  >=,  ==,  !=,  ===(it checks type also), !==

// we can also use it like this 
// const balance = 1000
// if(balance > 500) console.log("test"), console.log("test2");
// but we dont had to do like this bcs its immture practice

// ++++++++NESTING+++++++
// if(balance < 500){
//     console.log("less than");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){// if any of the condition is false then we dont go inside the loop
    console.log("alloow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}

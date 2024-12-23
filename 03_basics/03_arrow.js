const user = {
    username: "nikhil",
    price: 999,

    welcomeMessage : function(){
        // when we want to refer current context then we have
        // to use this to refer anything like done below
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


//+++++++++++IMPORTANT QUES++++++++++++++++++
/* this quesion is mostly asked the global object inside the 
browser is window objwct */


// function chai(){
//     console.log(this);
// }

// chai()

// function chai1(){
//     username: "nikhil"
//     console.log(This.username);
// }
// chai1()
// our context is working inside object only not isnide the
// function in function it gives output as undefined


/* for making an arrow funtion we have to remove function
and after the parenthesis of function we have to put an 
arrow like this => as shown below */

const chai = () => {
    let username = "nikhil"
    // console.log(this.username);
    // when we use command above it gives undefined as output

    // console.log(this);
    // when we use command above then itgives empty parenthesis as output
}
// chai()



// ++++++++ARROW FUNCTION+++++++++++


/* this is the explicit return of an arrow function where 
we had use curly braces and return as written below*/
// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }


/*another way to use arrow function called as implicit return 
in this we remove the curly braces  and remove return as written below*/

// const addTwo = (num1,num2) => num1 + num2 //THIS OR
// const addTwo = (num1,num2) => (num1 + num2)  //THIS

// IF we want to return an object then
// const addTwo = (num1,num2) => {username: "nikhil"}
// the above command will return unfdefined bcs it is wrong way
// the below command is the right way to return an object
const addTwo = (num1,num2) => ({username: "nikhil"})

console.log(addTwo(3,4));
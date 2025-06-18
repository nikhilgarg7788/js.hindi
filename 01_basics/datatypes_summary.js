// #Primitive
/* 7 types: 
String 
Number 
Boolean 
Null
Undefined
Symbol 
BigInt */

const score = 100
const scoreValue = 100.3

const isLoggeedIn = false
const outSidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);
// to create a number as bigint we can use 'n' at the end
const bigNumber = 212913912381818391n
//JavaScript is a dynamic type of language


// Reference(Non Primitive)
/* arrays
   objects
   functons */

const heroes = ["shaktiman","spiderman"]
// all the data inside the curly braces is object
let myObj = { 
    name:"nikhil",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

//to know the datatype of anyone variable we can use
console.log(typeof scoreValue);

// ++++++++++++++++++++++++++++++
// stack(Primitive) vs heap(Non Primitive)
// stack is used for primitive data types and heap is used for non primitive data types
// stack is used for static memory allocation and heap is used for dynamic memory allocation
// stack is used for storing the value and heap is used for storing the reference of the value
// stack is used for storing the value of the variable and heap is used for storing the reference of the variable    

let myyoutubeChannel = "nikhil-nc-com"
// this value will go inside the stack 

let anothername = myyoutubeChannel
anothername = "garggaming"

console.log(myyoutubeChannel);
console.log(anothername);

let userOne = {
    email: "user.google.com"
    upi: "user@upi"
}

let userTwo = userOne
userTwo.email = "user2.google.com"
console.log(userOne.email);
console.log(userTwo.email);
// here userOne and userTwo are pointing to the same object in the heap memory
// so if we change the value of userTwo, it will also change the value of userOne
// to create a copy of the object we can use spread operator or Object.assign
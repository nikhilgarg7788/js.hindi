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

const bigNumber = 212913912381818391n
//JavaScript is a dynamic type of language


// Reference(Non Primitive)
/* arrays
   objects
   functons */

const heroes = ["shaktiman","spiderman"]
let myObj = { 
    name:"nikhil",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

//to know the datatype of anyone variable we can use
console.log(typeof scoreValue);


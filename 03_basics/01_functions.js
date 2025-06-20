 // console.log("N");
// console.log("I");
// console.log("K");
// console.log("H");
// console.log("I");
// console.log("L");

// if you had to perform this work 10 times then it will be difficult and time consumingso for this we will use function
    
function sayMyName() {
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}

// sayMyName() 
// the above command is the function execution
// this is the most basic example
    

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)
// addTwoNumbers(3, null)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// here if we use console.log then it will print the value as undefined so hereis the 
// another way to return the value from the function below

function addTwoNumbers(number1, number2){

    
        //  let result = number1 + number2
        //  return result
        //  after using return statement we can not print any other value

        // anotherway to return the value
        return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: " ,result);



// now we will discuss in how many ways we can take these values in function
// ex: number1, number2

function loginUserMessage(username){
    /*we can also give some default like
    function loginUserMessage(username = "sam") like this
    if you pass any value to the function then this value will 
    be overwrited */
    // we can also write (username === undefined) AS (!username)
    if(username === undefined){
        console.log("PLEASE ENTER A USERNAME");
         return
    }
    return `${username} just logged in `
}

// we have to write console log in the command below bcs we are 
// returning the value from the function
// console.log(loginUserMessage("Nikhil"));
console.log(loginUserMessage()); // this will give output as undefined


// ..................REST OPERATOR(...num1 )............

function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200 ,300 ,400));
// here 200 goes to val1 and 300 goes to val2 so it will only print 400 as num1
/* in the above command this will only take the first value 
for this we have RESTopereator (...num1) and get output as array*/



// HOW TO PASS AN OBJECT IN AN FUNCTION
const user = {
    username: "nikhil",
    age: 22
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and age is ${anyObject.age}`);

}
handleObject(user)

// we can also pass direct object like this
handleObject({
        username: "krishna",
        age: 22
})

// we can also pass arrays directly
const newArray = [2, 3, 4, 5]

function returnSecondValue(getArray){
        return getArray[2]
}

console.log(returnSecondValue(newArray));
// ....................OR..................
console.log(returnSecondValue([100, 200, 300, 400]));


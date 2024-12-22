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

// sayMyName() // this is the most basic example
    

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)
// addTwoNumbers(3, null)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")



function addTwoNumbers(number1, number2){
        //  let result = number1 + number2
        //  return result
        //  after returning we can not print anything

        // anotherway
        return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: " ,result);



// now we will discuss in how many ways we can take these values in function
// ex: number1, number2

function loginUserMessage(username){
    /*we can also gice some default like
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

// console.log(loginUserMessage("Nikhil"));
console.log(loginUserMessage()); // this will give output as undefined












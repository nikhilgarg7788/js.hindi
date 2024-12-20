// Stack(Primitive), Heap(Non-Primitive)

let myYouTubeName = "nihkilgarg.com"

let anotherName = myYouTubeName
anotherName = "nikhilgarg"

console.log(myYouTubeName);
console.log(anotherName);

let userOne={ 
    email: "ngrg7788@goole.com",
    upid: "uer@ibl"
}
let userTwo= userOne

//to access the value we can use the following
userTwo.email = "ngarg7789@goggle.com"


console.log(userOne.email);
console.log(userTwo.email);


// this userOne goes into the stack but its value goes ino the heap
// singleton: ye apni trh ka ek hi obj bnata hai
// constructor se agr bnega to humesha singleton bnega
// Object.create

//OBJECT LITERALS

// the command below is used to create an object
const mySym = Symbol("key1")

// name is key and nikhil is value and same for all
const JsUser = {
    name:"Nikhil",
     "fullName":"nihkil garg",
     // for using sym we have to give them in square braces
    [mySym]: "myKey1",
    age: 22,
    location: "sonipta",
    email: "ngarg@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

console.log(JsUser.email);
// the command above is not preffered in these cases
// console.log(JsUser.fullName);
// console.log(JsUser[mySym]);
// here we cannot access full name using dot(.) we can access only using square braces
// for using sym we have to give them in square braces
console.log(JsUser["email"]);
console.log(JsUser["fullName"]);
console.log(JsUser[mySym]);

// to overwrite the value we can do this
JsUser.email = "nkhil@gmail.com"

// to freeze the value
// Object.freeze(JsUser)


// after freezing try to change by this command
JsUser.email = "nikhil@microsoft.com"
console.log(JsUser);

JsUser.greeting = function()
{
    console.log("Hello JS User")
}
JsUser.greetingTwo = function(){
    // here we reffer to the object itself using this keyword
    console.log(`hello Js User, ${this.name}`);
}

// as this is a function so we have to put parenthesis to call it
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


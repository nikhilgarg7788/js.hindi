// singleton: ye apni trh ka ek hi obj bnta hai
// constructor se agr bnega t humesha singleton bnega
Object.create

//OBJECT LITERALS
// name is key and nikhil is value and same for all
const mySym = Symbol("key1")

const JsUser = {
    name:"Nikhil",
    // here we cannot access full name using dot(.) we can access only using square braces
    "fullName":"nihkil garg",
    // for using sym we have to give then in square braces
    [mySym]: "myKey1",
    age: 22,
    location: "sonipta",
    email: "ngarg@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

console.log(JsUser.email);
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
    console.log(`hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


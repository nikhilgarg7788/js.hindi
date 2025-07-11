const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
// this keyword is used to refer to the current context
// this is used to access the properties of the current object
// this is used to access the methods of the current object
}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
// this return is a choice if we dont want to write this we can do that
// because it is implicitily returned
    return this
}


// this new keyword is called the constructor function
// it creates a new object and sets the prototype of the object to the constructor function's prototype
// it also returns the object created by the constructor function
// this is used to create a new object with the properties and methods defined in the constructor functio
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);
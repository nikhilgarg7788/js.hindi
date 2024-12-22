// const tinderUser = new Object()  // singleton hai

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sam@gmail.com",
    fullname:{
        userFullname: {
            firstname:"nikhil",
            lastaname:"garg"
        }
    }
}

console.log(regularUser.fullname.userFullname);
// wanna access firstname only then
console.log(regularUser.fullname.userFullname.firstname);



// HOW TO COMBINE TWO OBJECTS
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1 , obj2 }

// here {} = target and obj1,obj2 are sources
const obj3 = Object.assign({}, obj1, obj2)

// we can spread also
const obj4 = {...obj1, ...obj2}
console.log(obj3); 
console.log(obj4);


// when we had more than one objects in an array then how to access them
const users = [
    {
        
    },
    {
        
    },
    {

    },
    {
        id:1,
        email: "n@gmail.com"
    },
    {
        id:1,
        email: "n@gmail.com"
    },
    {
        id:1,
        email: "n@gmail.com"
    }
]

users[1].email

console.log(tinderUser);

// to have all the keys of an object
console.log(Object.keys(tinderUser));
// from the above command we kept all the keys in an array 
// now we can easily apply loop on these and access them

// we can access the values also
console.log(Object.values(tinderUser));

// we can also access entries
console.log(Object.entries(tinderUser));

// to check whether the object have that value or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


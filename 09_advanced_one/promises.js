// promise ka mtlb hota hai ki aapko kuch kaam karna hai jo time lega
// aur jab wo kaam ho jayega tab aapko pata chalega.
// Promise ek object hai jo aapko batata hai ki aapka kaam kab complete hoga.
// Promise ka 3 state hota hai:
// 1. Pending - jab aapka kaam abhi ho raha hai.
// 2. fullfilled - jab aapka kaam ho gaya hai.
// 3. Rejected - jab aapka kaam nahi ho paya hai.
// 4. Resolved - jab aapka kaam ho gaya hai.
// 5. Settled - jab aapka kaam ho gaya hai ya nahi ho paya hai. 
// 6. Finally - jab aapka kaam ho gaya hai ya nahi ho paya hai, aapko pata chalega.  

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
    // the method below is used to connect .then and resolve
        resolve()
    }, 1000)
})
// in the command below .then is directly connected to the resolve
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// another way to consume a promise is using async/await
// async/await is a way to write asynchronous code in a synchronous manner.
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// fetch is a method to make network requests
// fetch returns a promise, which resolves to the response of the request
// fetch is a method to make network requests
// async function getAllUsers(){
//     try {

// here the whole thing of coversion takes time so we have to await for it
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
// the command below is used to convert the response to json
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
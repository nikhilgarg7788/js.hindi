const coding = ["js", "ruby", "java", "python", "cpp"] 


// +++++++FOREACH+++++++++++
// here we use callback function and in that we dont give name to fun

// coding.forEach(function (item) {
//     console.log(item);
// } )





// we can also use arrow func

// coding.forEach(( item) => {
//     console.log(item);
// })





// suppose we write a fun so can wwe pass this fun or not

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)




// we can have more parameters other than items

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })




// suppose we have objects inside the array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
})
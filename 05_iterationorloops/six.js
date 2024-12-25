const coding = ["js", "java", "py", "cpp"]

// if we want to store the values in a variable then

const value = coding.forEach((item) => {
    // console.log(item);
    // here it doesnt return anything so we have to return that
    return item
})
// console.log(value);

// FOREACH loop doesntt return anything


// FILTER
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const  newNums = myNums.filter((num) => num > 4 )
// console.log(newNums);
// here we have to specify conditions and acc to that values are returned



// const  newNums = myNums.filter((num) =>{
//     // num > 4
//     // here we have startes scope but putting curly braces so
//     // we have to write return keyword here
//     return num > 4
// } )



// using FOREACH LOOP
// const newNums = []
// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);







const books = [
    {title: 'BookOne', genre:'fiction', publish: '1981'},
    {title: 'BookTwo', genre:'non-fiction', publish: '1989'},
    {title: 'BookThree', genre:'history', publish: '1985'},
    {title: 'BookFour', genre:'science', publish: '1983'},
    {title: 'BookFive', genre:'history', publish: '1971'},
    {title: 'BookSix', genre:'non-fiction', publish: '1999'}
];


let userBooks = books.filter( (bk) => bk.genre === 'history')
userBooks = books.filter(((bk) => {return bk.publish > 1982 && bk.genre === 'history'}))

console.log(userBooks);
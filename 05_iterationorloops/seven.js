const myNum = [1, 2, 3, 4, 5, 6, 7, 8]

const newNums = myNum.map((num) => num + 10) 

//  or if we open an scope then
const newNums2 = myNum.map((num) => {return num + 10})


// CHAINING
const newNums3 = myNum
    .map((num) => num * 10)
    .map((num) => num + 2)
    .filter((num => num >= 40))


console.log(newNums3);




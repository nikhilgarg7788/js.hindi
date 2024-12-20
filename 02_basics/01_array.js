const myArr = [1,3,4,5,6,7]
/* in JS arrays can be resized and these cannot be accessed by using 
arbitrary strings like myArr["one"] */

console.log(myArr[0]);


/* array copy operation cretaes shallow copies and deep copies
SHALLOW COPY: this is a copy whose properties share the same references as those
DEEP COPY: this is copy which doesn't share the same references */

// TYPES OF ARRAY DECLARATION

const Arr = [0,1,2,3,4,5,]
const myHeroes = ["shaktiman","spiderman"]
const myArr2 = new Array(0,1,2,3,4,)


// METHODS OF ARRAY
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9)
// by using the command above the values is added in the starting
myArr.shift()
// by using the command above the unshift value is removed from the array
// if we use only the shift command then the front value is removed

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
//  by using join the type of our array is changed

console.log(myArr);
console.log(typeOfnewArr);


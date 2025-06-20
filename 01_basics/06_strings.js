const name = "nikhil"
const repoCount = 100

// console.log(name + repoCount + "VALUE");
// we should not use this syntax to concat because this is a little outdated
// instead we can use the syntax used below
console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

//  another method to declare a string
const myName = new String('nikhil-nc-com')

console.log(myName[0]);
console.log(myName.__proto__);



console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(3));
console.log(myName.indexOf('h'));


const newString = myName.substring(0,4)
console.log(newString);


const anotherString = myName.slice(-7,4)
console.log(anotherString);

const newStringOne = " nikhil  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://nikhil.com/nikhil%20garg"
console.log(url.replace('%20','-'));
console.log(url.includes('sundar'));
console.log(myName.split('-'));
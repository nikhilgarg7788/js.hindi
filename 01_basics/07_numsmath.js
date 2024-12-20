const score = 400
// console.log(score);

const balance = new Number(200)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

//toFixed is used for decimal values like 200.00
// console.log(balance.toFixed(3));

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(2));

const hundreds = 100000000
//this command below apply commas accordng to the US standard
// console.log(hundreds.toLocaleString());
//for indian standard we have to write the command below
// console.log(hundreds.toLocaleString('en-IN'));


//...........................MATHS.......................


console.log(Math);
// for absolute value: positive remains positive and negative becomes positive
console.log(Math.abs(-4));
// for round off the decimal value
console.log(Math.round(4.3));
//ceil rounds the number to top value like 4.2 to 5
console.log(Math.ceil(4.2));
// floor value takes the lowest value if written 4.9 then takes 4
console.log(Math.floor(4.9));
//min for minimum value and max for maximum value
console.log(Math.min(4,3,4,5));
console.log(Math.max(4,5,7,8));

// random takes the random value between 0 and 1
console.log(Math.random());

// this will take value greater than 1 and value can also be 0 so that we add 1 in it
console.log((Math.random() * 10)+ 1);
console.log(Math.floor(Math.random() * 10)+ 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1))+min);

 


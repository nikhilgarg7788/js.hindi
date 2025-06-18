// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >=0);


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
/* here the reason for output of the above code is
that an equity check == and comparison ><>=<= works differently
comparison converts null to a number, treating it as 0
that's 
why(3) null>=0 is true and (1) null>0 is false */
// these above codes can cause confusions


// === it is a strict check

console.log("2" === 2);


    
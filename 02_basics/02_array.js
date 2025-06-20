const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["supreman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// by using above code we can add the dc_heros array as a single element in marvel_heros array
//means the above commad doesnt concatenate the two arrays and takes array as an element


//  console.log(marvel_heros);
//  console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// concat is used to concatenate the two arrays and concat returns new array so
// we have to store the result in a new variable 

// console.log(allHeros);


 
// spread is used to get the each element of arrays as like concat
// spread is used in command below
// const all_New_Heros = [...marvel_heros, ...dc_heros]
// console.log(all_New_Heros);


const anotherArray = [1, 2, 3,[4, 5, 6], 7, [8, 9, [2, 4] ]]
const real_anotherArray = anotherArray.flat(4)
// flat is used to flatten the array and it takes the depth as an argument
// if we dont pass the depth then it will flatten the array to one level
// if we pass 2 then it will flatten the array to two levels and so on

console.log(anotherArray);

console.log(real_anotherArray);

// Array.isArray() is used to check whether the given value is an array or not
console.log(Array.isArray("nikhil"));

// tocreate an array from a string we can use Array.from() method
// it takes an iterable object as an argument and returns an array
console.log(Array.from("nikhil"));

// the command below is an interesting case
console.log(Array.from({name: "nikhil"}))
// the command above returns an array with a single element which is the value of the name property

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 ,score3));
// the above command creates an array with the given values
// Array.of() is used to create an array from the given values
// it is similar to Array.from() but it takes the values as arguments instead of an iterable object

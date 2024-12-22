const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["supreman", "flash", "batman"]

// marvel_heros.push(dc_heros)

//  console.log(marvel_heros);
//  console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// // spread is used to get the each element of arrays as like concat

// const all_New_Heros = [...marvel_heros, ...dc_heros]
// console.log(all_New_Heros);


const anotherArray = [1, 2, 3,[4, 5, 6], 7, [8, 9, [2, 4] ]]
const real_anotherArray = anotherArray.flat(4)

console.log(real_anotherArray);

console.log(Array.isArray("nikhil"));
console.log(Array.from("nikhil"));
// the command below is an interesting case
console.log(Array.from({name: "nikhil"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 ,score3));

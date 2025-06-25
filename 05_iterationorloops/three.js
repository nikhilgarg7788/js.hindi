 //  FOROF LOOP

// ["" , "" ,"" ] strings inside an 
// [{}, {}, {}] objects inside an Array

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    // console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings) {
    // console.log(`each char is ${greet}`);
}




// +++++++++++++++++++++ MAPS ++++++++++++++
// maps are known for unique values no duplicate entry is there
const map = new Map()
map.set('IN', "india")
map.set('USA', "united states of india")
map.set('Fr', "france")
map.set('IN', "india")

// console.log(map);

// MAPS using FOROF loop

for(const [key, value] of map){
    console.log(key, ':-', value);
}


// FOROF loop on objects
const myObject ={
    game1: "NFS",
    game2: "spiderman"
}

// for(const [key, value] of myObjects){
//     console.log(key, ':-', value);
// }
//  here this structure of FOROF loop doesnt work

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "reby",
    swift: "swift by apple"
}

// for objects the FOROF loop doesnt work so for this we have one 
// another loop called FORIN loop

// +++++++++++++++ FORIN loop +++++++++++++++++

for (const key in myObject) {
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


// can we use this FORIN loop for arrays

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
//    console.log(key);
// we can get values also by doing this 
    // console.log(programming[key]);
}

// in FOROF loop we got the values when used on arrays
// but in FORIN loop we got the keys when used for arrays


// +++++++++++++ MAP USING FORIN LOOP++++++++++

// const map = new Map()
// map.set('IN', "india")
// map.set('USA', "united states of india")
// map.set('Fr', "france")
// map.set('IN', "india")

// for (const key in map) {
//     console.log(key);
   
// }

// using FORIN loop also we cannot iterate on map bcs its not iterable


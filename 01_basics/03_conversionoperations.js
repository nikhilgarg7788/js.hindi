let score = "Nan"
console.log(typeof score);
console.log(typeof(score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// the value we take and the value it shoes inside the number
// if we give value null to score then it takes value as 0
// if we take value of score as undefined then it takes Nan
// if we take booleanvalue then it takes value as 0 or 1
// if we take string value then also it shows Nan



let isLoggedIn = "nikhil"

let booleanIsLoggedin = Boolean(isLoggedIn);
console.log(booleanIsLoggedin);

// 1 => true; 0 => false
// "" => false
// "nikhil" => true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
let myDate =new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// to check the type of date
// console.log(typeof myDate);
// type of date is object

// in js months start form 0
// ways to declare date
let myCreatedDate = new Date(2022,1,12)
let myCreatedDate1 = new Date(2022,1,12,7,8)
let myCreatedDate2 = new Date("2022-02-12")
let myCreatedDate3 = new Date("03-14-2021")


// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate1.toLocaleString());
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate3.toLocaleString());

// it is very useful in js specially when you want to knw exact timestamp
// or when you want to design quizes or poles
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate3.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

 newDate.toLocaleString('default',{
    weekday: "long"
})

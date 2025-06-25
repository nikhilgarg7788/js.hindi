// +++++++++++++REDUCE++++++++++++

const myNum = [1, 2, 3]

// in the command below, we are using the reduce method to sum all the values in the array
// const myTotal = myNum.reduce(function (acc, currval){
//         console.log(`acc: ${acc} and currval: ${currval}`);
//                 return acc + currval
// },0)
//  the above 0 is the value for the start of the accumulator


// using aero 
const myTotal = myNum.reduce((acc,currval) => acc + currval, 0)
// console.log(myTotal);



const shoppingCard = [
    {
        itemname: "js course",
        price: 5999
    },
    {
        itemname: "py course",
        price: 2999
    },
    {
        itemname: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCard.reduce((acc, item) => acc + item.price,0)
    console.log(priceToPay);
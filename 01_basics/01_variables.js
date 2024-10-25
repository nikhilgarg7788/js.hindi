const accountId = 144553
let accountEmail = "ngarg7789@gmail.com"
var accountPassword = "nikhil@1234"
accountCity = "Sonipat"

/* if our client wants a variable accountState but doesnt specify any value
for that so we can also do that and the value it will take will be undefined*/

let accountState;

// accountId = 2 // changing the const value is not possible

/* for declaring an variable in javascript we can use both let and var 
 and both let and vart var values can be changed and we are preffered not to use var
 because of issues in block space and functional scope*/

 accountEmail = "ngarg788@gmail.com"
acocuntPassword = "nikhil@7788"


/* in javascript we can declare a varibale without writing anything in
front of that variable but this method should not be used */

accountCity  = "jaipur"



// for investigation we have to use this

console.log(accountEmail);


/*but problem is that evrytime we have to write this again and again so 
for this we can use console.table like this in this we can write muptiple varibles 
in square braces*/

console.table([accountPassword, accountCity, accountState])   

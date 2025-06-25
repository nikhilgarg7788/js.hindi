  /* ++++++++JAVASCRIPT EXECUTION CONTEXT++++++++++++++++++
mtlb ye ki jo humne file bnai hai use javascript run kese kregi
Ye 2 Phase m run krti hai 


firstly {} -> global ExecutionContext bnega fir usko refer kia jaega ek 
variable (This).
ye hoga hi hoga 

then we have, second-> Function Execution Context

and when we will study moongse and all then we have one more
ECContext eval EC

first phase is,
{} -> Memory Creation Phase Or creation Phase
 in this humne jo bhi variables declare kie hai unke lie jgh 
 create hoti hai unko execute nhi kia jata

 second phase is,
 -> Execution Phase
 isme jo variables declare kie gye hai vo execute hote hai 



 we have an example code,

let val1 = 10
let val2 = 5
 function addNum(num1,num2){
    let Total = num1 + num2
    return Total
 }
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)
in this code now

// ++++++++++BELOW IS EXPLANATION OF THE ABOVE CODE+++++++++++

1)1st step is global execution
means this is locates to (this) or ye to hona hi hona hai 
chahe kuch bhi kro

2)Memory Creation phase
isme sbhi variables ko ikhtha kia jata hai or unko apne pass rkha
jata hai bs like
val1 = undefined
val2 = undefined
addNum = defination (full func)
result1 = undefined
result2 = undefined

3)Execution Phase
isme execution hoga
val1 = 10
val2 = 5
addNum = isme ek nya excutional context bnega that is
(new variable env + execution thread) iski vjeh se ab
ye jo do phase the -> Memory creation , Execution dono phirse 
hoge for addNum
**** jo ye nya executional context bnega vo uska kam hone 
k bd dlt hoga

4)Memory Phase
val1 = undefined
val2 = undefined
total = undefined

5)Execution context
num1 = 10
num2 = 5
total = 15
now total is returned to global EC

6) hum ab jage firse 3) step p
now result1 = 15
result2 = isme firse vhi kahani repeat hogi jo result1 k lie hui thi 
same nya executional context bnega and all..


+++++++++CALL STACK +++++++++++++++
 |                  |
 |                  |
 |------------------|          STACK
 |        GEC       |
 |------------------|

isme like we had a fun One() this will go inside the stack
and after execution it comes out of the stack

and if we have suppose three fun 
one()  two()   three() 
so pehle one() jaega usko bd apne call kia second() and so on

so here is a phenomenon used LIFO(last in first out)
so pehle three() bhr aaega fir second() and so on

*/






/*
For number of iterations/execution we use Loop
------------------------------------------------------
1.for loop
-----------
    -Number of ietrations are fixed/known then use for loop
    Scenarios: Calendar/datepicker 30/31/28/29
               dropdown with options 

2.while loop
------------
    -Is called Entry control loop
    -Number of iterations are not fixed or unknown then use while loop
    Scenarios: Pegination(WebTable)
               Pageloadtimeout


3.do-while loop
-------------------
    -Is called Exit control loop
    -One time iteration without matter what condition it is like true or false



Array/Object
-----------------
4. for...of loop
    -for of loop ietartes over a value and applicable for string/array

5. for...in loop
    -for in loop ierates over keys/index and applicable for Object
*/

console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

console.log("------------");

console.log("-----forloop----");
//print Hello 5 times

for(let i=1;i<=5;i++)
{
    console.log("Hello");
    
}

console.log("------------");
//print 1 to 10 numbers

for(let i=1;i<=10;i++)
{
    console.log(i);
    
}
console.log("------------");
//print 10 to 1

for(let i=10;i>=1;i--)
{
    console.log(i);
    
}
console.log("---Interview question-----");
//by default for loop condition is always true
// for(;;)
// {
//     console.log("Hi");//infinite time execution
    
// }

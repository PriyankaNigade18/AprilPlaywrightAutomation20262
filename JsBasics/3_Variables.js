/*

Variable
=============
Name of storage where we can store a data

In Js we use 3 keywords to declare variable(var,let,const)
1.var(not recommended /older)
--------------------------------
-Scope: Global +Functional
-Redeclaration + reassignment allowed
-var are always hoisted


//modern Js
2.let
----------------
-Scope: Global + Block
-Any mutable data we store using let
-Redeclaration is not allowed
-Reassignment is allowed
- Due to temporal deadzone let is not hoisted

3.const(final keyword in Java)
---------------
-Scope: Global + Block
-Any Immutable data we store using const
-Redeclaration is not allowed
-Reassignment is not allowed
- Due to temporal deadzone const is not hoisted

Scope:
============
1.Global scope
--------------------
Variables declare insideJs file not inside any function and then you can access it globally(everywhere)

2.Functional Scope
-----------------------
Variables declared inside function and accessed only through function is called functional scope

3.Block Scope
-------------------
-Applicable for let and const keyword
- Variables declared inside block { } then such scope is block scope




*/




console.log("-----Global scope------");


var fname="Yashika";
let city="Banglore";
const email="yashika@gmail.com";

console.log("First name is: "+fname);
console.log("City is: "+city);
console.log("Email is: "+email);


console.log("----Global data within function----");

function test1()
{
console.log("First name is: "+fname);
console.log("City is: "+city);
console.log("Email is: "+email);
}

//call
test1();


console.log("-------Functional scope------");
//functional scope is applicable for var type
function test2()
{
    var browserName="chrome";//local variable
    console.log("browser name  is: "+ browserName);
    
    let browserVersion=147;//block scope
    const vendorName="Google";//block scope
    console.log("Browser version is: "+browserVersion);
    console.log("Browser vendorName is: "+vendorName);
    
    

}

test2();
 
 //console.log("Browser version is: "+browserVersion);//ReferenceError: browserVersion is not defined
//console.log("Browser vendorName is: "+vendorName);//ReferenceError: vendorName is not defined//
//console.log("browser name  is: "+ browserName);//ReferenceError: browserName is not defined


console.log("------Block scope------");

if(true)
{
    let toolVersion=1.59;
    const toolName="Playwright";

    console.log("Tool Name is: "+toolName);
    console.log("Tool version is: "+toolVersion);
    

}

//console.log("Tool Name is: "+toolName);//ReferenceError: toolName is not defined
//console.log("Tool version is: "+toolVersion);//ReferenceError: toolVersion is not defined



console.log("--------------------");

var a=10;//global
console.log(a);//10
function test3()
{
 var a=20;//functional/local
 console.log(a);//20
 if(true)
 {
    var a=30;
    console.log("if: "+a);//30
 }
 console.log("value of a: "+a);//30 as a is functional scope as var type
 }

test3();


console.log("------------");
//let and cost
let b=10;
console.log(b);//10

function test4()
{
    let b=20;
    console.log(b);//20

    if(true)
    {
        let b=30;
        console.log(b);//30
        
    }
    console.log("value of b: "+b);//b is 20 as b is block scope
    
    
}

test4();




//Assignment
function testScope() { 
if (true)
{ 
var a = 10; 
let b = 20; 
} 
console.log(a); // ? 
console.log(b); // ReferenceError: b is not defined
} 

//testScope();

//assignment no5

const obj={name:"Alice"};
obj.name="Bob";//value update
console.log(obj.name);

obj={name:"charli"};//reassignment
//TypeError: Assignment to constant variable.





















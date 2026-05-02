/*

Variable
=============
Name of storage where we can store a data

In Js we use 3 keywords to declare variable
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


//Golbal data within function





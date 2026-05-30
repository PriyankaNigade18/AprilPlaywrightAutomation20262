/*
Everything is Js is Dynamic Object
Object represent some key and value pair combination
Js object enclosed with {}
In Js every key is by default is String type and values are real data(number/string/boolean)

Ways to declare an Object
==========================
1. Object literal
2. Using Class ......(added in ES6 feature)

3. Using constructor Function
4. Using Prototype based Object (Object interface)


Object Using Class
------------------
What is Object?
--------------------
Any real worls entity where each object have its state and Behaviour
Object in Js key: value 

What is class
-------------------
- Group of similar type of objects are called class
- Class is template where we have Object details

In Javascript for Class object we can create using new keyword

refernce=object
let s1=new StudentData();

constructor
==============
- constructor is special function 
- constructor help to initialize object
- In Javascript delcare constructor using constructor()
- Constructor get called at the time of Object creation
- In Js only one constructor allowed


this keyword:
this keyword refers current class object properties as well methods


*/

class StudentData{

//global data: by default it is public: which is instance type
id;
fname;


constructor(id,fname)//here id and fname is local variable
{
    //instance=local
    this.id=id;
    this.fname=fname;

    //local=local
    // id=id;
    // fname=fname;


}

}

//object will create outside on of the class
const s1=new StudentData(101,'Pooja');
console.log(s1.id);
console.log(s1.fname);










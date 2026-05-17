/*
In Js every object is dynamic object

String is primitive data type and Immutable object
String is collection of characters

let fname="Jay"
    fname=['j','a','y'].....Array
    index= 0    1   2

    Property(variable)
    --------------
    length

    Methods
    --------------
    1.includes()
    2.toUpperCase()
    3.toLowerCase()
    4.trim()
    5.concat()
    6.split()
    7.charAt(index)
    8.indexOf(char)
    9.replace()
    10.replaceAll()...etc

*/
let number=[10,20,30,40];//array
    //index 0  1   2  3
console.log(number);
console.log(number[2]);//30


console.log("-----String Immutaility--------");

//once you declare string you can not modified the value
let fname="Jay";
console.log(typeof fname);//string
console.log(fname);
//fname[1]="A";//TypeError: Cannot assign to read only property '1' of string 'Jay'


//length property:Returns the length of a String object.
console.log("Length of fname is: "+fname.length);//3
















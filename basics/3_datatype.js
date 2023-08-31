"use strict"; //treat all JS code as newer version

//  alert(3+3)
//  ReferenceError: alert is not defined, we are using NodeJs not browser


/*
__________________________________________________
    JavaScript has 8 Datatypes
        1. String
        2. Number
        3. Bigint
        4. Boolean
        5. Undefined
        6. Null - (standalone value)
        7. Symbol - (unique)
        8. Object

    The Object Datatype
    The object data type can contain:
        1. An object
        2. An array
        3. A date
____________________________________________________
*/


// let name= "rajat"
// let age= 22
// let isLoggedIn= true



// console.log(typeof "rajat");
// console.log(typeof null);    //object
// console.log(typeof undefined); //undefined


let score =33
console.log(typeof(score));

let val=Number (score)
console.log(typeof val);

let val2= "546ok"
let val3=Number(val2)
console.log(typeof(val2));
console.log(val3)              //NaN
//"33" => 33
//"546ok" => NaN
//undefined =>NaN


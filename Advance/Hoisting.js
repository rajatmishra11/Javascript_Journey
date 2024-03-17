// var a=5
// console.log(a)
// //o/p= 5


//------------------------------------------


// console.log(a)
// var a=5
// //o/p = undefined


//--------------------------------------------


/**
internal working of Interpreter-
Moved the declaration not initialization
    var a;
    clg(a)
    declared but value not given- > undefined
 */

//-------------------------------------------


// console.log(a)
// var a=5
// console.log(a)
// // undefined & 5

//-----------------------------------------

// console.log(a)
// let a=5
// console.log(a)
//  Cannot access 'a' before initialization

//-----------------------------------------

// console.log(a)
// const a=5
// console.log(a)
//  Cannot access 'a' before initialization


//-----------------------------------------

// console.log(b)
// // b is not defined


//-----------------------------------------

//Pure Function
// add(3,4)
// function add(a, b){
//     console.log(a+b)
// }
//op = 7

//-----------------------------------------

// add();
// var add= function(){
//     console.log("im Learninng")
// }
//op=  add is not a function


/*
Internal Working-
var add;     //undefined
add()
var add= function(){
    console.log("im Learninng")
}
*/

//-----------------------------------------

add()
const add= ()=>{
    console.log("Im adding")
}

//op=  Cannot access 'add' before initialization
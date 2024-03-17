// console.log(this)



// const obj={
//     name : "Shilpi",
//     lname: "Pathak",
//     fullName : function ()
//     {
//         return this.name + " " + this.lname;
//     }
// }
// console.log(obj.fullName())




// function xyz()
// {
//     return this;
// }
// console.log(xyz())
//window object returned


"use strict";
function xyz() { 
    return this;
}
console.log(xyz())
//undefined is returned because of strict mode

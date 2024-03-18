//  sync JS---------------------->
// console.log("HI")
// console.log("I'm you friend")
// console.log("Rajat Mishra")

const { response } = require("express");

//  async JS---------------------->
// console.log("fun1")
// setTimeout(() => {
//     console.log("fun2: I'm executing after 3 sec")
// }, 3000);
// console.log("fun3: I'm Written just after fun2")

//------------------------------------------------------------------>

// let promise = new Promise(function (resolve, reject) {
//   let xyz = false;
//   if (xyz) {
//     setTimeout(() => {
//       resolve("Hey there im resolved");
//     }, 3000);
//   } else reject("Hey there im rejected");
// });

// promise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch(console.error());
// console.log(promise);

//------------------------------------------------------------------>

let promise = new Promise(function (resolve, reject) {
  fetch("https://dummyjson.com/carts")
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((err) => reject(err));
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch(console.log("error in fetching data"));

//  sync JS---------------------->
// console.log("HI")
// console.log("I'm you friend")
// console.log("Rajat Mishra")

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

// let promise = new Promise(function (resolve, reject) {
//   fetch("https://dummyjson.com/carts")
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch((err) => reject(err));
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(console.log("error in fetching data"));

//---------------------------->
// function getCheese() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const cheese = "@cheese";
//       resolve(cheese);
//     }, 2000);
//   });
// }

// function makeDough(cheese) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dough = cheese + "@dough";
//       resolve(dough);
//     }, 2000);
//   });
// }

// function bakePizza(dough) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pizza = dough + "@pizza";
//       resolve(pizza);
//     }, 2000);
//   });
// }

// getCheese()
//   .then((cheese) => {
//     console.log("here is cheese");
//     return makeDough(cheese);
//   })
//   .then((dough) => {
//     console.log("here is dough");
//     return bakePizza(dough);
//   })
//   .then((pizza) => {
//     console.log("here is pizza");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

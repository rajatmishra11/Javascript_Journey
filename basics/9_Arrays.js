/*
    Arrays-
        1.An array is a special variable, which can hold more than one value
        2.You can also create an array, and then provide the elements
        3.Array indexes start with 0.
        4.The JavaScript method toString() converts an array to a string of (comma separated) array values.
        5.The length property of an array returns the length of an array (the number of array elements)
        6.The easiest way to add a new element to an array is using the push() method
        ---------------------------------------------------------------------------------------------------
        Methods-
            Array length
            Array toString()
            Array pop()
            Array push()
            Array shift()
            Array unshift()
            Array join()
            Array delete()
            Array concat()
            Array flat()
            Array splice()
            Array slice()
*/

// const myArr=[1,4,2,3,5]
// const myHero=["iron-man", "thor"]
// const myArr2= new Array(myArr[0])

//array in js can contains non-homogeneous
//array in js can be resized
const arr = [1, "jhbdhdd", 0.87];
console.log(arr[1]);
console.log(arr.includes(9)); //boolean

// //Array Methods-
// myArr.push(6)
// console.log(myArr)

// myArr.unshift(9)            //add 9 to start
// console.log(myArr)

// //silce, splice
const myArr = [1, 4, 2, 3, 5];
console.log("A", myArr);
const myn1 = myArr.slice(1, 3);
console.log("B", myn1); //4 2

const myn2 = myArr.splice(1, 3);
console.log("C", myn2); //4 2 3

const marvel_hero = ["thor", "iron"];
const dc_heros = ["flash", "Batman"];
// marvel_hero.push(dc_heros);
////array of array [ 'thor', 'iron', [ 'flash', 'Batman' ] ]
const all_heros = marvel_hero.concat(dc_heros);
console.log(all_heros);
//[ 'thor', 'iron', 'flash', 'Batman' ]

const all_new_heros = [...marvel_hero, ...dc_heros];
console.log(all_new_heros);
//[ 'thor', 'iron', 'flash', 'Batman' ]

const arr4 = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]];
const real = arr4.flat(Infinity);
console.log(real);
//1 2 3 4 5 6 7 8 9 10

console.log(Array.isArray("Rajat")); //false

//looping in arrays--------------->
const fruits = ["banana", "apple", "gauva", "orange", "mango"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// for(i of  fruits){
//     console.log(i);
// }

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// fruits.forEach(print);
// function print(key) {
//   console.log(key);
// }

fruits.forEach((items) => {
  console.log(items);
});

///looping in objects -------------------------->

const ramparivaar = {
  father: "Dashrath",
  mother: "kausalya",
  children: ["lav", "kush"],
  wife: "sita",
  brother: ["lakshman", "bharat", "satrughan"],
  friends: ["hanumaan", "bhibheesan"],
};

// for (const relations in ramparivaar) {
//   console.log(relations);
// }

// for (const relations in ramparivaar) {
//   console.log(relations, ":", ramparivaar[relations]);
// }

// const personKeys = Object.keys(ramparivaar);
// for (const key of personKeys) {
//   console.log(ramparivaar[key]);
// }

const personKeys = Object.keys(ramparivaar);
const personValues = Object.values(ramparivaar);
const personEntries = Object.entries(ramparivaar);

console.log(personKeys, personValues, personEntries);

const calculate = (a, b, operation) => {
  return operation(a, b);
};
const addres = calculate(13, 4, (num1, num2) => {
  return num1 + num2;
});

//M2
const sub = (a, b) => a - b;
const subres = calculate(98, 8, sub);
console.log(addres, subres);

//M3
function multiply(a, b) {
  return a * b;
}
const mulres = calculate(6, 7, multiply);
console.log(mulres);

//-------------------------------------------------->

const arr = [1, 2, 4, -9, 5, 67, 98, 45];
const firstNeg = (num) => {
  //boolean return
  return num < 0;
};

const res = arr.find(firstNeg);
console.log(res);

const idx = arr.findIndex(firstNeg);
console.log(idx);

arr.forEach((element, index) => {
  console.log(index, element);
});

//------------>
function getCheese() {
  setTimeout(() => {
    const cheese = "@";
    console.log(cheese);
  }, 4000);
}
getCheese();
//return undefined and after 4s @

////->>>>>>>>>>>>>>>>>>>>>>
/// pizza -> dough -> cheese (callback hell)

function getCheese(callback) {
  setTimeout(() => {
    const cheese = "@";
    console.log("here is cheese", cheese);
    callback(cheese);
  }, 4000);
}

function makeDough(cheese, callback) {
  setTimeout(() => {
    const dough = cheese + "^";
    console.log("here is the dough", dough);
    callback(dough);
  }, 2000);
}

function bakePizza(dough, callback) {
  setTimeout(() => {
    const pizza = dough + "*";
    console.log("here is the pizza", pizza);
    callback(pizza);
  }, 2000);
}
getCheese((cheese) => {
  makeDough(cheese, (dough) => {
    bakePizza(dough, (pizza) => {
      console.log("Got my pizza", pizza);
    });
  });
});

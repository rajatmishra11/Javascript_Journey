function getCheese(callback) {
  setTimeout(() => {
    const cheese = "@";
    console.log("here is cheese", cheese);
    callback(cheese);
  }, 4000);
}
/// pizza -> dough -> cheese

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

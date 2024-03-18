function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "@cheese";
      resolve(cheese);
    }, 2000);
  });
}

function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "@dough";
      resolve(dough);
    }, 2000);
  });
}

function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "@pizza";
      resolve(pizza);
    }, 2000);
  });
}

async function orderPizza() {
  const cheese = await getCheese();
  const dough = await makeDough(cheese);
  const pizza = await bakePizza(dough);
  console.log(`Here's your delicious ${pizza}`);
}

console.log(orderPizza());

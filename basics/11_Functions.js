//Normal Declaration(Hoisted)-------->
function amee(param1, param2) {
  return param1 + param2;
}
var add = amee(6, 5);
console.log(add);

//function expression(Un-Hoisted)-------->
const div = function (a, b) {
  return a / b;
};
console.log(div(9, 3));

//Arrow Function(Un-hoisted)------------->
var mul = (x, y) => x * y;
console.log(mul(2, 3));

//Nested Function------------------------->

function fun1() {
  function fun2() {
    function fun3() {
      console.log("fun3");
    }
    fun3();
  }
  fun2();
}
fun1();

setTimeout(() => {
  setTimeout(() => {
    console.log("Hello from the first callback!");
  }, 2000);
  console.log("Hello from the main code!");
}, 1000);

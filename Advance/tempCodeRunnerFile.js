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
function multiply(a,b)
{
    return a*b;
}
const mulres= calculate(6,7, multiply)
console.log(mulres)
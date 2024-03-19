/*
    1.  JavaScript has only one type of number.
    2.  Numbers can be written with or without decimals.
    3.  Extra large or extra small numbers can be written with scientific (exponent) notation:
    4.  javaScript Numbers are Always 64-bit Floating Point
    5.  Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
    6.  
*/

const score = 400;
console.log(score); //400
console.log(typeof score); //Number
//-----------------------------------------
const balance = new Number(100);
console.log(balance); //[Number : 100]
console.log(typeof balance); //object
//-----------------------------------------
console.log(balance.toString().length);
//-----------------------------------------
console.log(balance.toFixed(2)); //100.00
//----------------------------------------
const othernum = 23.4594;
console.log(othernum.toPrecision(4)); //23.46(round-off)
//---------------------------------------
const hundreds = 100000;
console.log(hundreds.toLocaleString("en-IN")); //1,00,000
//---------------------------------------

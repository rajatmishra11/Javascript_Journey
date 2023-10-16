// // _______________________________________________
// // Playing with String-
/*          1.JavaScript strings are for storing and manipulating text.
            2.You can use single or double quotes:
            3.You can use quotes inside a string, as long as they don't
             match the quotes surrounding the string
        _____________________________________________
        Methods-
            String length
            String slice()
            String substring()
            String substr()
            String replace()
            String replaceAll()
            String toUpperCase()
            String toLowerCase()
            String concat()
            String trim()
            String trimStart()
            String trimEnd()
            String padStart()
            String padEnd()
            String charAt()
            String charCodeAt()
            String split()
 
 */
//  //------------------------------------------
const name = "rajat";
const repocount = 15;
console.log(name + repocount + "Value"); //rajat15Value
//--------------------------------------------------
//    1.Template Literals use back-ticks (``) rather than the
//        quotes ("") to define a string:
//    2.Template literals allows multiline strings
//    3.Template literals provide an easy way to interpolate 
//        variables and expressions into strings.
//    4.Template literals allow variables in strings:
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
//Hello my name is rajat and my repo count is 15

//  //-------------------------------------------
const getName = new String("rajatmishra");
console.log(getName[0]); //r
console.log(getName.__proto__); //{}
console.log(getName.toUpperCase()); //RAJATMISHRA
console.log(getName.charAt(4)); //t
console.log(getName.indexOf("t")); //4

const newString = getName.substring(0, 4); //raja
console.log(newString);

const anotherString = getName.slice(-5, -3); //is
console.log(anotherString);

const newStr = " rajat    ";
console.log(newStr);
console.log(newStr.trim()); //remove whitespaces

const url =
  "youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11";
console.log(url.replace("%20", "$"));
console.log(url.includes("=")); //true
console.log(url.split("/"));

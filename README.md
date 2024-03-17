<h1>JavaScript</h1>
___________________________________________________________
### What is JS-
1.  Lightweight, interpreted compiled scripting language.
2.  used in front-end , back-end application using frameworks.
__________________________________________________________
### What is ECMA Script( ES5 and ES7)
-  scripting lang, creates standard for creating a scripting language

___________________________________________________________________
### Why JS->
1. can change HTML content
2.  accepts both single / double qoutes
3.  can change HTML attribute value
4.  can change html styles
5.  can hide html elements
6.  show html elements
___________________________________________________    
### How to use JS code-
-   inserted b/w <script> .... </script> tags
    1. JS code in head:
    ```
    <head>
        <script> JS code </script>
    </head>
    ```
    2. JS code in body
    ```
    <body>
        <script> JS code </script>
    </body>
    ```
    3.  External Js:
        -  External scripts are practical when the same code 
            is used in many different web pages.
        - JavaScript files have the file extension .js.
        -  To use an external script, put the name of the 
            script file in the src (source) attribute of a <script> tag:
        -  You can place an external script reference in <head> 
            or <body> as you like.
        -  External scripts cannot contain <script> tags.    
        ```<script src="myScript.js"></script>```

        -----------------------------------------------------
        -   Advantages of External JS-
            - seperates HTML & code
            - makes JS & html easier to read and maintain
            -  speedup pages
            -----------------------------
            -   external script can be referenced via
                1. full web url
                2. with a file path
                3. without any path 

_______________________________________________________________________________
###  JS output-
-   JavaScript can "display" data in different ways:
    -  Writing into an HTML element, using innerHTML.
            To access an HTML element, JavaScript can use the ```document.getElementById(id)``` method.
            The id attribute defines the HTML element. The innerHTML property defines the HTML content.
    -  Writing into the HTML output using ```document.write()```.
    -  Writing into an alert box, using ```window.alert()```.
    -  Writing into the browser console, using ```console.log()```.
___________________________________________________________________________________
### JS Important Points
1. JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.
2. JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.
3. Ending statements with semicolon is not required, but highly recommended.
4.  JavaScript programs (and JavaScript statements) are often called JavaScript code.
5.  JavaScript is Case Sensitive
6.  Hyphens are not allowed in JavaScript. They are reserved for subtractions
        
_____________________________________________________________________________________
### JavaScript Comments
-   Not all JavaScript statements are "executed".
        ```  Code after double slashes // or between /* and */ ```
- Comments are ignored, and will not be executed      
_________________________________________________________
### JavaScript has 8 Datatypes
-   Primitive datatype
    1. String
    2. Number
    3. BigInt
    4. Boolean
    5. Undefined
    6. Null - (standalone value)
    7. Symbol - (unique)
    8. Object

-   Object-Datatype
    1. An object
    2. An array
    3. A date
___________________________________________________________
### JS values
1. Fixed  value   ->Literals
    -  Numbers are written with or without decimals:
    - Strings are text, written within double or single quotes         
2. Variable value ->Variables
    - variables are used to store data values.
    - JavaScript uses the keywords var, let and const to declare variables.
____________________________________________________________________________
### Variables are containers for storing values.
___________________________________________________________
- JavaScript Variables can be declared in 4 ways:
1.  Automatically
2.  Using var
3.  Using let
4.  Using const
___________________________________________________________
### When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.
___________________________________________________________
### There are different types of JavaScript operators:
```
    Arithmetic Operators
    Assignment Operators
    Comparison Operators  (=== equal value and equal type)
    String Operators
    Logical Operators
    Bitwise Operators
    Ternary Operators
    Type Operators
```
_______________________________________
 ### JS String
1. JavaScript strings are for storing and manipulating text.
2.  You can use single or double quotes:
3.  You can use quotes inside a string, as long as they don't
    match the quotes surrounding the string
_____________________________________________
### String Methods-
```
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
```
_______________________________________
### Number in JS-
1.  JavaScript has only one type of number.
2.  Numbers can be written with or without decimals.
3.  Extra large or extra small numbers can be written with scientific (exponent) notation:
4.  javaScript Numbers are Always 64-bit Floating Point
5.  Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

_______________________________________
### JS Math
-   The JavaScript Math object allows you to perform mathematical tasks on numbers.
```
        Math.E        // returns Euler's number
        Math.PI       // returns PI
        Math.SQRT2    // returns the square root of 2
        Math.SQRT1_2  // returns the square root of 1/2
        Math.LN2      // returns the natural logarithm of 2
        Math.LN10     // returns the natural logarithm of 10
        Math.LOG2E    // returns base 2 logarithm of E
        Math.LOG10E   // returns base 10 logarithm of E
        ----------------------------------------------------
        Methods-
            Math.round(x)	Returns x rounded to its nearest integer
            Math.ceil(x)	Returns x rounded up to its nearest integer
            Math.floor(x)	Returns x rounded down to its nearest integer
            Math.trunc(x)	Returns the integer part of x (new in ES6)
        -------------------------------------------------------
        JavaScript Math Methods
            Method	            Description
            abs(x)	            Returns the absolute value of x
            acos(x)	            Returns the arccosine of x, in radians
            acosh(x)	        Returns the hyperbolic arccosine of x
            asin(x)	            Returns the arcsine of x, in radians
            asinh(x)	        Returns the hyperbolic arcsine of x
            atan(x)	            Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
            atan2(y, x)	        Returns the arctangent of the quotient of its arguments
            atanh(x)	        Returns the hyperbolic arctangent of x
            cbrt(x)	            Returns the cubic root of x
            ceil(x)	            Returns x, rounded upwards to the nearest integer
            cos(x)	            Returns the cosine of x (x is in radians)
            cosh(x)	            Returns the hyperbolic cosine of x
            exp(x)	            Returns the value of Ex
            floor(x)	        Returns x, rounded downwards to the nearest integer
            log(x)	            Returns the natural logarithm (base E) of x
            max(x, y,..., n)	Returns the number with the highest value
            min(x, y,.. n)  	Returns the number with the lowest value
            pow(x, y)	        Returns the value of x to the power of y
            random()	        Returns a random number between 0 and 1
            round(x)	        Rounds x to the nearest integer
            sign(x)	            Returns if x is negative, null or positive (-1, 0, 1)
            sin(x)	            Returns the sine of x (x is in radians)
            sinh(x)	            Returns the hyperbolic sine of x
            sqrt(x)	            Returns the square root of x
            tan(x)	            Returns the tangent of an angle
            tanh(x)	            Returns the hyperbolic tangent of a number
            trunc(x)	        Returns the integer part of a number (x)
```
________________________________________________________________________
### DateTime in js
1.  JavaScript Date Objects let us work with dates
2.  Date objects are static. 
        The "clock" is not "running".
3.  JavaScript will use the browser's time zone and display a date as a full text string.
```
9 ways to create a new date object 
    new Date()
    new Date(date string)
    new Date(year,month)
    new Date(year,month,day)
    new Date(year,month,day,hours)
    new Date(year,month,day,hours,minutes)
    new Date(year,month,day,hours,minutes,seconds)
    new Date(year,month,day,hours,minutes,seconds,ms)
    new Date(milliseconds)
```
________________________________________________________
### Arrays in JS-
1.  An array is a special variable, which can hold more than one value
2.  You can also create an array, and then provide the elements
3.  Array indexes start with 0.
4.  The JavaScript method toString() converts an array to a string of (comma separated) array values.
5.  The length property of an array returns the length of an array (the number of array elements)
6.  The easiest way to add a new element to an array is using the push() method
```
Array Methods-
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
```
____________________________________________________________

### Hoisting in JS- (only for var)
- Hoisting in JS default behaviour of moving declarations to the top of the file.
-   Declaration can be both variable and function
-   Moved the declaration not initialization at top
-   Wwork for proper as a function, not on function expression, arrow function.
___________________________________________________________
### Scope Chain and Lexical Environment/ Scope in JS-
- determines the accecibility of variables and functions:
1.  Lexical Scope- 
    -   the scope of the variable or function is determined by where it is defined in the source code.
    -   The scope remains the same throughout the execution of program.
    - Types
        -   Golobal-
            -   variables defined any functions or blocks can
            be accessed from anywhere within the program

        -   Local Scope
            - variables defined within the function/block can only  accessed with in that scope.
            -   Local scope includes both block and function scope.

        -   Nested Scope
            -   function defined within the function can access variables from outer function.

2.  Scope Chain:
- This is the hierarchy of scopes that will be searched in order to find a function or variable34. The search is conducted in a lexical manner, starting from the current scope of the current function. If the variable or function is not found in the current scope, the engine looks in the parent function, and finally in the global scope.
___________________________________________________________
### Closure in JS:  Feature of JS
1.  A closure is the combination of a function bundled toghether(enclosed) with references to its surrounding state (the lexical environment).
2.  In other words, a closure gives you access to an outer function's scope from inner Function.
___________________________________________________________
### this keyword in js-
1. In Js , this keyword always refers to an object.
2. The thing about it that the object it refers to will vary depending on how and where "this" is being called.
3. Different ways to use this keyword
    -   By itself
    -   inside object method.
    -   inside function
________________________________________________________
### Event Loop & Call Stack in JS
- An event loop is a part of JavaScript runtime environment which allows web applications to handle asynchronous tasks











___________________________________________________________
### Call, Apply and Bind in JavaScript:
1.  Call is a function that helps you to change the context of the invoking function.
2.  i.e , it helps you to replace the value of ``` this ``` inside the function with whatever value you want .
_____________________________________________________________

### call():
- The call() method invokes a function with a given this value and arguments provided individually1. ```func.call(thisArg, arg1, arg2, ...)```.
### apply():
- similar to call(), but it takes an array-like object of arguments1. ```func.apply(thisArg, [argsArray])```
### bind():
- The bind() method creates a new function that, when called, has its this keyword set to the provided value,
     with a given sequence of arguments preceding any provided when the new function is called2. ```func.bind(thisArg[, arg1[, arg2[, ...]]])```
***Note*** 
- thisArg is the object to be used as this inside func. arg1, arg2, ... are arguments to prepend to arguments provided to the newly-bound function.
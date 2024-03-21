<h1>JavaScript</h1>

---

### What is JS-

1.  Lightweight, interpreted compiled scripting language.
2.  used in front-end , back-end application using frameworks.

---

### What is ECMA Script( ES5 and ES7)

- scripting lang, creates standard for creating a scripting language

---

### Why JS->

1. can change HTML content
2. accepts both single / double qoutes
3. can change HTML attribute value
4. can change html styles
5. can hide html elements
6. show html elements

---

### How to use JS code-

- inserted b/w <script> .... </script> tags

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

      - External scripts are practical when the same code
        is used in many different web pages.
      - JavaScript files have the file extension .js.
      - To use an external script, put the name of the
        script file in the src (source) attribute of a <script> tag:
      - You can place an external script reference in <head>
        or <body> as you like.
      - External scripts cannot contain <script> tags.  
        `<script src="myScript.js"></script>`

      ***

      - Advantages of External JS-
        - seperates HTML & code
        - makes JS & html easier to read and maintain
        - speedup pages
        ***
        - external script can be referenced via
          1. full web url
          2. with a file path
          3. without any path

---

### JS output-

- JavaScript can "display" data in different ways:
  - Writing into an HTML element, using innerHTML.
    To access an HTML element, JavaScript can use the `document.getElementById(id)` method.
    The id attribute defines the HTML element. The innerHTML property defines the HTML content.
  - Writing into the HTML output using `document.write()`.
  - Writing into an alert box, using `window.alert()`.
  - Writing into the browser console, using `console.log()`.

---

### JS Important Points

1. JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.
2. JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.
3. Ending statements with semicolon is not required, but highly recommended.
4. JavaScript programs (and JavaScript statements) are often called JavaScript code.
5. JavaScript is Case Sensitive
6. Hyphens are not allowed in JavaScript. They are reserved for subtractions

---

### JavaScript Comments

- Not all JavaScript statements are "executed".
  `Code after double slashes // or between /* and */`
- Comments are ignored, and will not be executed

---

### JavaScript has 8 Datatypes

- Primitive datatype

  1. String
  2. Number
  3. BigInt
  4. Boolean
  5. Undefined
  6. Null - (standalone value)
  7. Symbol - (unique)
  8. Object

- Object-Datatype
  1. An object
  2. An array
  3. A date

---

### JS values

1. Fixed value ->Literals
   - Numbers are written with or without decimals:
   - Strings are text, written within double or single quotes
2. Variable value ->Variables
   - variables are used to store data values.
   - JavaScript uses the keywords var, let and const to declare variables.

---

### Variables are containers for storing values.

---

- JavaScript Variables can be declared in 4 ways:

1.  Automatically
2.  Using var
3.  Using let
4.  Using const

---

### When to Use var, let, or const?

1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.

---

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

---

### JS String

1. JavaScript strings are for storing and manipulating text.
2. You can use single or double quotes:
3. You can use quotes inside a string, as long as they don't
   match the quotes surrounding the string

---

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

---

### Number in JS-

1.  JavaScript has only one type of number.
2.  Numbers can be written with or without decimals.
3.  Extra large or extra small numbers can be written with scientific (exponent) notation:
4.  javaScript Numbers are Always 64-bit Floating Point
5.  Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

---

### JS Math

- The JavaScript Math object allows you to perform mathematical tasks on numbers.

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

---

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

---

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

---

### Function in JS

- What is functions?
  - Functions are the group of code or program which is used more often.
- Why we use function?
  - To organize our codes.
  - It makes our programs reusable.
  - for code re-usability and clean code.
- Types
  - `Predefined` : defined at the time of making any language
  - `userdefined` :defined by programmer
    Ex: square(x)=> x\*x

---

### Function can be defined in several ways-

1.  Function Declaration-

        - also known as function statement, it declares a function within a function keyword and must have a function name.

    ```
    function greet(name) {
    return `Hello, ${name}!`;
    }

    ```

2.  Function Expression

    - or Anonymous Functions (also known as IIFE – Immediately Invoked Function Expressions):
    - are not hoisted, they can only be accesed after they have been defined.
    - `They are typically stored in variable.`

    ```
    let  sayHi = function (name){
        console.log("hi" + name);
    };
    ```

3.  Function Statement:
    - or function declaration

---

### Params v/s Args-

1.  Parameters are the variables that are listed as a part of function definition.

```
function add(x, y){return x+y}  : x & y are params
```

2.  Arguments are the actual values that are passed to the function when it is invoked.

```
add(5,6)                     : 5 & 6 are args
```

---

### First Class Fnctions( A programming Concept)

- they can be assigned to variables
- passed as arguments,
- returned from other functions,
- and stored in data structures.
- This allows functions to be manipulated like any other object or variable in JavaScript.

---

### Arrow Function

- concise way to write functions
- introduced in ES6
- Advantages
  - Short Hand
  - Implicit Returns: if fun body consits of single statement that returns a value, you can omit the `return` keyword and ``{}`
  - No Binding of `this` keyword
  - Automatic binding of this`keywordto the owner`context```of the function.

`Syntax : () => {}`

---

### Hoisting in JS- (only for var)

- Hoisting in JS default behaviour of moving declarations to the top of the file.
- Declaration can be both variable and function
- Moved the declaration not initialization at top
- Wwork for proper as a function, not on function expression, arrow function.

---

### Scope Chain and Lexical Environment/ Scope in JS-

- determines the accecibility of variables and functions:

1.  Lexical Scope-

    - the scope of the variable or function is determined by where it is defined in the source code.
    - The scope remains the same throughout the execution of program.
    - Types

      - Golobal-

        - variables defined any functions or blocks can
          be accessed from anywhere within the program

      - Local Scope

        - variables defined within the function/block can only accessed with in that scope.
        - Local scope includes both block and function scope.

      - Nested Scope
        - function defined within the function can access variables from outer function.

2.  Scope Chain:

- This is the hierarchy of scopes that will be searched in order to find a function or variable34. The search is conducted in a lexical manner, starting from the current scope of the current function. If the variable or function is not found in the current scope, the engine looks in the parent function, and finally in the global scope.

---

### Closure in JS: Feature of JS

1.  A closure is the combination of a function bundled toghether(enclosed) with references to its surrounding state (the lexical environment).
2.  In other words, a closure gives you access to an outer function's scope from inner Function.

---

### this keyword in js-

1. In Js , this keyword always refers to an object.
2. The thing about it that the object it refers to will vary depending on how and where "this" is being called.
3. Different ways to use this keyword
   - By itself
   - inside object method.
   - inside function

---

### Event Loop & Call Stack in JS

- An event loop is a part of JavaScript runtime environment which allows web applications to handle asynchronous tasks

---

### Call, Apply and Bind in JavaScript:

1.  Call is a function that helps you to change the context of the invoking function.
2.  i.e , it helps you to replace the value of `this` inside the function with whatever value you want .

---

### call():

- The call() method invokes a function with a given this value and arguments provided individually1. `func.call(thisArg, arg1, arg2, ...)`.

### apply():

- similar to call(), but it takes an array-like object of arguments1. `func.apply(thisArg, [argsArray])`

### bind():

- The bind() method creates a new function that, when called, has its this keyword set to the provided value,
  with a given sequence of arguments preceding any provided when the new function is called2. `func.bind(thisArg[, arg1[, arg2[, ...]]])`
  **_Note_**
- thisArg is the object to be used as this inside func. arg1, arg2, ... are arguments to prepend to arguments provided to the newly-bound function.

---

### Map, Reduce & Filter

- **`Map()`** :
  - The Map() method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.
  - `var new_array= arr.map(function callback(element, index, array))`
- **`Filter()`** :
  - The filter() method takes each element in an array and it applies a conditional statement against it.
  - If this conditional returns true, the element gets pushed to the output array.
  - If the condition returns false, the element does not get pushed to the output array.
  - `var new_array = arr.filter(callback)`
- **`Reduce()`** :
  - The reduce() method reduces an array of values down to just one value. To get the output value,
  - it runs a reducer function on each element of the array.
  - `var total = arr.reduce(callback[ accumulator, initialValue])`

**_Note_**

- In reduce callback function first parameter will be accumulator (total), second parameter will be current element
- The reduce() method reduces the values of an array to a single value by repeatedly applying a function along with an accumulator.

---

 <h1>Async JS </h1>

---

### Sync in JS?

- Sync means the code runs in a particular manner of instructions given in the program.
- Each instruction wait for privious instructions to complete its execution.

---

### What is Async JS?

- is a programming approach that allows the non-blocking execution of tasks, enabling concurrent operations and efficient handling of time-consuming operations.
- JS is single threded language , which means it can only `execute one task at a time`
- certain cases like when fetching data from backend/ api can take a long time to complete.
- if JS wait for these task to finish, it would ``block rest of code`from executing. this leads to async JS to comes in picture
- Async JS Concepts:
  - Callbacks
  - Promises
  - Async/Await

---

`async await >> promise chain >> callback hell`

---

### Callbacks in JS-

- A callback is a function that is passed as an argument to another function.
- it is executed after the main function has completed its task.

```
mainFn( callbackFn )
    Eg.
    setTimeout( callbackFn, 4000)

```

- Problem with Callbacks:
  1. Hard to manage multiple nested callbacks (Callback Hell).
  2. Difficult to handle errors and maintain readability.
  3. Not easy to track what's happening in your application flow.

```
Array Callback Functions-
find()                      return first value of array element that passes a test
findindex()                 return ist index of an array element that passes a test
forEach()                   calls a fun for each element
map()                       creates a new array with result of coding a function for every array element.
filter()                    returns a new array with all elements that pass a test.
every()                     check whether all the elements pass a test
some()                      check whether at least one element passes a test
reduce()                    apply a function against an accumulator and each element
                            in the array (from left to right) to reduce it to a single
```

---

### setTimeOut Function

- the setTimeOut() method calls a function after a number of milliseconds.
- setTimeOut is an async function, meaning that the timer function will not pause the execution of other functions in the function stack.
- `setTimeOut(function, milliseconds)`

---

### Program Execution in JS-

- `Call Stack`
  - It’s where JavaScript keeps track of every function call it ever made.
  - Whenever a script calls a function, that function execution context gets pushed onto the stack.
  - If the function calls another function, then that function also gets added to the top of the stack.
  - The stack empties out when there are no more functions to execute.
  - LIFO based.
- `CallBack Queue`
  - The callBackQueue function is used by JavaScript runtime to keep track of asynchronous tasks.
  - This queue holds functions that need to be called once some async operation completes.
  - FIFO based.
- `Web API's`
  - The Web API's function asynchronously perform operations like reading/writing files or making network requests.
  - They provide interfaces to access low level resources like file system or network sockets.
  - These APIs make use of the call back queue to schedule their operations.

---

### Event Loop-

- Event Loop is fundamental mechanishm that enables nthe async execution of code.
- It is essential part of JS runtime environment , allowing the language to handle non-blocknig code operations.
- flow of code-
  `callstack -> webApi -> callBackQueue -> eventLoop -> callStack`
- the ``eventLoop` continously checks the call stack and callback queue.
- if the call stack is `empty` but there are items in the callback queue, javascript will take the next item from the callback queue and push to callStack for execution.

---

### CallBack Hell-

- also known as Pyramid of Doom
- is a situation in js where multiple nested callback function make the code difficult to read and maintain.
- It occurs when you have many nested callback functions which make the code look like a pyramid or a series of nested blocks. This can lead or simply "callback hell"
- eg. in API requests or handling file I/O.

---

### Promises In JS-

- A Promise is a special type of JS Object. It produces a value after any an asynchronous
  operation completes successfully, or an error if doesn't complete successfully due to time out, network error, and so on.
-

```
let promise = new Promise( function(resolve, reject ){
    //Make an async call and either resolve or reject
})
```

- Promise object has following internal Properties:
  - `state`:
    - **pending**: intially when the executer function starts the exexution.
    - **fullfilled** : when object is resolved.
    - **rejected** : when the promise is rejected

---

### Async / Await in JavaScript

- these are special keywords that are used to work with promises in more comfortable fashion.
- The `async` keyword can be placed before a function, which means the function will always return a promise.
- If the function returns a value that is not a promise , it will be automatically wrapped in a resolved promise.
- the`await` keyword can be used inside an `async` function.
- It makes the function wait untill the promise settles and retunrs its result.
- `await` used with `async` .

---

<h1>Browser Object Model- JS Window Object </h1>

---

- BOM allows JS to interact with browser.

- The `window` object is a property of the global object (`globalThis`) and represents the window or tab in which the script is running.

```
location:             Represents the current URL of the browser window.
history:              Provides the browsing history of the current window session.
innerHeight:          Returns the height of the window's content area.
innerWidth:           Returns the width of the window's content area.
open():               Opens a new browser window or a new tab, depending on browser settings.
close():              Closes the current browser window.
resizeBy():           Resizes the current window by a specified amount.
resizeTo():           Resizes the current window to a specified width and height.
moveTo():             Moves the current window to a specified position on the screen.
moveBy():             Moves the current window by a specified amount relative to its current position.
scrollBy():           Scrolls the document by a specified number of pixels.
scroll():             Scrolls the document to a specified position.
scrollTo():           Scrolls the document to a specified position.
print():              Opens the print dialog to print the current document.
document:             Represents the HTML document loaded in the current window and provides
                      methods and properties to access and manipulate its content.
```

---

### Definition of document:

The document object represents the HTML document loaded in the current window. It serves as an entry point to the web page's content, allowing manipulation and interaction with elements such as accessing and modifying the DOM (Document Object Model), handling events, and altering the appearance and structure of the page.

The document object provides various properties and methods, including:

```
document.getElementById():      Retrieves an element from the document by its ID.
document.createElement():       Creates a new HTML element.
document.querySelector():       Retrieves the first element that matches a specified CSS selector.
document.querySelectorAll():    Retrieves a list of all elements that match a specified CSS selector.
document.addEventListener():    Attaches an event handler to the document.
document.title:                 Gets or sets the title of the document.
document.body:                  Gets the <body> element of the document.
document.head:                  Gets the <head> element of the document.
document.cookie:                Gets or sets the cookies associated with the document.
```

---

<h1>The HTML DOM- </h1>

- when a web page is loaded, the browser creates a Document Object Model of the page.
- The HTML DOM is constructed as a tree of object.
- It defines the logical structure of documents and the way a document is accesed
- `Object Model` treats HTML elements as objects with properties and methods.
- `Tree Structue` represents hierarchical relationships between elements.
- `Access And Manipulation` When we interact with the webpage using javascript, we use this DOM to manipulate the content and style and events of the each element
- `Finding Elements` by their ID or class name.

---

### Finding HTML Elements

```
1.  document.getElementById('foo')
2.  document.getElementByTagName("p)
3.  document.getElementByClassName("intro")
4.  document.querySelector("#bar");
5.  document.querySelectorAll(".demo")
```

---

### Modifying HTML

1. Changing HTML content using Inner HTML
   - `document.getElementById(id).innerHTML= new HTML`
2. Changing HTML attribute value:
   - `document.getElementById(id).setAttribute(name,value)`
   - `document.getElementById('myimg).src="landscape.jpg"`
   - `document.getElementById('mydiv').style.color='red'`
3. Modifying Class
   - Adding a class to element : `element.classList.add('newClass')`
   - Removing a class from an element : `element.classList.remove('oldClass')`
   - Checking if an element has a specific class : `element.classList.contains('className')`

---

### Creating And Appending HTML

- We can create a new element using the createElement() method of the document.
- We can append new Element(node) inside any other element

```
const para= document.createElement("p)
const element= document.getElementById("div1)
element.appendChild(para);
```

---

### DOM Events-

Events allows you to write JS Code that reacts to certain situations. Ex-

- When user clicks on button
- When form is submitted
- When mouse hovers over an image

There are different types of events like-

1. UI Events (mouse click , key press etc.)
2. Event Flow (Bubbling and Capturing)
3. Form related events (submit, reset)
4. Mouse Events (click, dblclick ...)
5. Keyboard Events (keydown, keypress, keyup)
6. Window and Document related events (scroll, resize)
7. Drag and Drop Events
8. ClipBoard Events
9. Touch Events

---

#### Event Listeners and Events Handlers

- are mechanisms used to respond to user interactions or other events that occur in a web page.

- Event Handler:

  - An event handler is a property of a DOM element that specifies the code to execute when a particular event occurs on that element.
  - Event handlers are often defined directly within HTML tags using attributes such as onclick, onmouseover, onkeydown, etc.
    `<button onclick="myFunction()">Click me</button>`
  - In this example, myFunction() is the event handler that will be executed when the button is clicked.

- Event Listener:
  - An event listener is a method that attaches an event handler function to a specified element, typically using JavaScript.
  - Event listeners provide more flexibility than inline event handlers as they allow multiple event handlers to be attached to the same event on a single element, and they also facilitate better separation of HTML and JavaScript code.
    `document.getElementById("myButton").addEventListener("click", myFunction);`
    In this example, myFunction is the event handler function that will be executed when the button with the id "myButton" is clicked.

---

### Event Propogation in JS

- Event propagation in JavaScript refers to the process of how events are transmitted or "propagated" through the DOM (Document Object Model) hierarchy.
- Types:

  - Event Capturing:

    - During the capturing phase, events propagate from the outermost ancestor down to the target element.
    - In event capturing, the event starts from the root of the DOM tree and travels through the ancestors down to the target element.
    - Event listeners attached in the capturing phase are called before the event reaches the target element.

  - Event Bubbling:

    - During the bubbling phase, events propagate from the target element up to the outermost ancestor.
    - In event bubbling, the event starts from the target element and travels through its ancestors up to the root of the DOM tree.
    - Event listeners attached in the bubbling phase are called after the event reaches the target element.

---

### Module v/s Package v/s library v/s framework in JS

1.  Module:
    A module is a single file containing lines of JavaScript code1. It’s the smallest piece of software, a set of methods or functions ready to be used somewhere else.

2.  Package:
    A package is a collection of modules23. It gathers a number of modules holding the same functional purpose, making it easier to include all the related modules at once.

3.  Library:
    A library is a collection of packages23. It offers a set of functionalities ready to use without worrying about the subsequent packages3. So, a library is what you include when you want to add some functionality to your code.

4.  Framework:
    A framework is a set of libraries3. But unlike a library, a framework also provides an architecture for the development work3. In other words, you don’t include a framework, you integrate your code into it3. It’s the wireframe of the project3. That’s why a framework forces its coding style on you3.

`module -> package -> library -> framework`

---

### Error Handling in JS

There are two types of errors in JavaScript:

1.  Syntax Errors:
    These occur when the JavaScript engine encounters code that violates the language syntax rules. These errors prevent the script from executing at all.

2.  Runtime Errors:
    These occur during the execution of the script. They typically happen when the script tries to perform an operation that is not allowed, such as accessing a property of an undefined variable, calling a method on an object that doesn't exist, or dividing by zero.

```
try {
    // Code that might throw an error
} catch (error) {
    // Code to handle the error
} finally {
    // Code that always executes, regardless of whether an error occurred
}
```

/*
operators in JS-
---------------------------------------------------
There are different types of JavaScript operators:
    Arithmetic Operators
    Assignment Operators
    Comparison Operators  (=== equal value and equal type)
    String Operators
    Logical Operators
    Bitwise Operators
    Ternary Operators
Type Operators
------------------------------------------------------
*/

     //________________________________________
    let val=3
    let negval= -val
    console.log(negval);  // -3

     //________________________________________
    console.log(2+2)
    console.log(2-2)
    console.log(2*2)
    console.log(2**3)

     //________________________________________
     //If you add a number and a string, 
     //the result will be a string!
    let str1= "hello"
    let str2="rajat"
    let str3=str1+str2
    console.log(str3)

     //______________________________________
    let a = "1" + 2;
    console.log(a);
    console.log(typeof a);
     //o/p-
        //12 
        //string


        //__________________________________________
        let a = 1 + "2";
        console.log(a);
        console.log(typeof(a));
        //o/p-
             //12 
            //string

        //_____________________________________________
        let a = "1" + 2 + 2;
        console.log(a);
        console.log(typeof(a));
            //o/p-
            //122
            //string

        //_______________________________________________
        let a = 1 + 2 + "2";
        console.log(a);
        console.log(typeof(a));
                //o/p-
                //32
                //string


        //_______________________________________________
        console.log(true);        //true
        console.log(+true);      //1
        console.log(true+)      //error
        console.log(+"")       //true
        //_______________________________________________

        console.log("2" > 1);   //true
        console.log("02" > 1);  //true
        console.log(null==0);   //false
        onsole.log(null>0)     //false
        console.log(null>=0)    //true?  *here null converted in 0

        //__________________________________________________
        console.log(undefined==0);  //false
        onsole.log(undefined>0);   //false
        console.log(undefined>=0);  //false
        //__________________________________________________


        //USE OF (===) check value + datatype
        console.log("0"===0);   //false
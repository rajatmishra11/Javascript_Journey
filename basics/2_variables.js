/*

Variables are containers for storing values.
___________________________________________________________
JavaScript Variables can be declared in 4 ways:
    1.Automatically
    2.Using var
    3.Using let
    4.Using const
___________________________________________________________
When to Use var, let, or const?
    1. Always declare variables
    2. Always use const if the value should not be changed
    3. Always use const if the type should not be changed (Arrays and Objects)
    4. Only use let if you can't use const
    5. Only use var if you MUST support old browsers.
*/

const accountId = 144553
let accountEmail = "rajat@gmail.com"

/**
 *Prefer not to use var--
    because of issue in block scope and function
*/
var accountPassword= "68478374"
accountCity= "jaipur"

//accountId=2
//TypeError: Assignment to constant variable.

accountEmail="hc@outlook.com"
accountPassword="824898743"
accountCity="Chennai"
console.table([accountId,accountEmail, accountPassword, accountCity])

let accountState
console.log(accountState);  //undefined


/*
_________________________________________________________________________________
JavaScript Identifiers
    1.All JavaScript variables must be identified with unique names.
    2.These unique names are called identifiers.
    3.Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
    4.The general rules for constructing names for variables (unique identifiers) are:
        -------------------------------------------------------------------------
        Names can contain letters, digits, underscores, and dollar signs.
        Names must begin with a letter.
        Names can also begin with $ and _ (but we will not use it in this tutorial).
        Names are case sensitive (y and Y are different variables).
        Reserved words (like JavaScript keywords) cannot be used as names.
        --------------------------------------------------------------------------
    5.JavaScript identifiers are case-sensitive.
*

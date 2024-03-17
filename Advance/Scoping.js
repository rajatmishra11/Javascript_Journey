//What is Scope Chain and Lexical Enviroment/ scope in js?

function abc(){
    var a=5
    function xyz()
    {
        console.log(a);

    }
    xyz();
}
abc();
//scope ,
//inner scope se dhoonta hai -> phir outer -> .. -> phir global 
//if not found return a is not defined
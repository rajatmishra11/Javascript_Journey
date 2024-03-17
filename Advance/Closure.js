// function abc()
// {
//     var a=5;
// }
// console.log(a)
//ReferenceError: a is not defined




// function fun1()
// {
//     let a=5;
//     console.log(a)
//     function fun2(){
//         let a=4;
//         console.log(a)
//     }
//     fun2()
// }
// fun1()
// 5 & 4



// function fun1()
// {
//     let a=5;
//     console.log(a)
//     function fun2(){
//         console.log(a)
//     }
//     return fun2;
// }
// let abc= fun1();;
// abc()

// 5 & 5

//working = we caaling fun1() that is returning fun2() i.e
// (fun2() + lexical environment of fun2())



// function fun1()
// {
//     let a=5;
//     function fun2(){
//         console.log(a)
//     }
//     a=8;
//     return fun2;
// }
// const abc= fun1()
// abc()

// 8 closure- > return a refernece of a



function fun1()
{
    let a=5;
    function fun2(){
        let a=9;
        console.log(a)
        function fun3(){
            console.log(a)
        }
        return fun3();
    }
    a=8;
    return fun2;
}
const abc= fun1()
abc()
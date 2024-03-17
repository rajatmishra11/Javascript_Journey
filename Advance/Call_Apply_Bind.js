const Person={
    Fname :"John",
    Lname : "Shukla",
    fullName : function(hometown, country) {
        return this.Fname +" " + this.Lname + " from " + hometown +  " "+country; 
    }
}

// const Person2={
//     Fname: "Rajat",
//     Lname : "Mishra",
//     fullName : function(){
//         return this.Fname +" " + this.Lname; 
//     }
// }
// console.log(Person.fullName() + " with " + Person2.fullName())

const Person2=
{
    Fname: "Rajat",
    Lname : "Mishra",
}
//call->
// console.log(Person.fullName.call(Person2, "Pune", "India"  ))


///apply ->
// console.log(Person.fullName.apply(Person2, ["Allahaganj", "India"]))


//bind ->
const res= Person.fullName.bind(Person2, "Allahaganj", "India")
// console.log(res)
console.log(res())
//array methods- map, reduce and filter

// var array=[1,2,3,4,5,6,7,8,9,10,11,12]
// // var new_arr= array.map((key)=>{
// //     return key*2;
// // })
// var new_arr= array.map(key => key*2)
// console.log(new_arr)




// var arr= [1,2,3,4,5,6,78]
// var new_arr= arr.filter(key=> key%2==0)
// console.log(new_arr)


var numbers= [1, 3,5,6,7]
var res= numbers.reduce((sum, item)=>{
    return sum+item;
})
console.log(res)
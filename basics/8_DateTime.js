/*
        1.  JavaScript Date Objects let us work with dates
        2.  Date objects are static. 
                The "clock" is not "running".
        3.  JavaScript will use the browser's
                time zone and display a date as a full text string.
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
    */

let myDate= new Date()
console.log(typeof myDate)          //object
console.log(myDate)                 //2023-09-02T08:37:05.050Z
console.log(myDate.toString())      //Sat Sep 02 2023 14:07:51 GMT+0530 (India Standard Time)
console.log(myDate.toTimeString())  //14:09:09 GMT+0530 (India Standard Time)

let myCreatedDate= new Date(2023, 0,23)
console.log(myCreatedDate.toDateString())       //Mon Jan 23 2023

let anotherDate= new  Date("2023-01-15")
console.log(anotherDate.toLocaleString())       //15/1/2023, 5:30:00 am

let myTimeStamp= Date.now()
console.log(myTimeStamp)
console.log(Math.round(myTimeStamp/1000))

let newDate=new Date()
console.log(newDate)

console.log(newDate.getDay())       //6 = Saturaday

newDate.toLocaleDateString('default',
    {
        weekday: "long",
    }
)


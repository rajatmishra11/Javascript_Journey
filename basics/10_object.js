//singlelton
//object literals

const mysymbol = Symbol("key1");
const mysymbol2 = Symbol("key2");

const JsUser = {
  name: "Rajat",
  fullname: "Rajat Mishra",
  age: 18,
  mysymbol: "key1",
  [mysymbol2]: "key2",
  email: "rajatmishra482001@gmail.com",
  location: "Noida",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["age"]);
console.log(JsUser["fullname"]);
console.log(JsUser["mysymbol"]); //type -String not an Symbol
console.log(JsUser[mysymbol2]);
console.log(typeof JsUser[mysymbol2]);

JsUser.email = "rajatmishra11@outlook.com";
// Object.freeze(JsUser)
// JsUser.email= "Rajat.20B0121165@abes.ac.in"
console.log(JsUser);

JsUser.greeting = function () {
  console.log("hello JS launde");
};
JsUser.greeting2 = function () {
  console.log(`hello JS launde, ${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

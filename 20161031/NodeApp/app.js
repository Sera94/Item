/**
 * Created by Administrator on 2016/10/31 0031.
 */

// console.log("Hello World");

// const Hello = require("./Hello");

const {Hello, Student}=require("./Hello");

var h = new Hello();
h.sayHello();

var s = new Student("ucai", 10);
s.sayHello();

//解构语法
// var arr = [1, 2, 3];
// var [a,b,c]=arr;
// console.log(a, b, c);

// var arr = [1, 2, 3];
// var [a,,c]=arr;
// console.log(a, c);

// var arr = [1, undefined, 3];
// var [a,b=5,c]=arr;
// console.log(a, b, c);


// function getNumbers() {
//     return [1, 2, 3];
// }
//
// var [a,b,c] = getNumbers();
// console.log(a, b, c);

//
// var obj = {name: "ucai", age: 10};
// var {name, age}=obj;
// console.log(name, age);

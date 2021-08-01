"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classesAndAccessModifier_1 = require("./classesAndAccessModifier");
var my_name = "ABu Bakar";
var age = 55;
var isOld = false;
var futureDecide;
futureDecide = 90;
// let myValue:string=null;
// let myValue:null=null;
// let undefinedValue: undefined = undefined;
// let numericValue: number = undefined;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
/*
number , string , boolean , enum , void , null , undefined , any , never , Array and tuple,readonly,unknown, Function
 */
//never type uses when function only throw error, means never return anything
// function throwError(message: string): never {
//     throw new Error(message);
// }
//unknown vs any
// let vAny: any =10;
// let vUnknown: unknown =10;
// let s1: string= vAny //allowed
// let s1: string= vUnknown //not allowed we need to convert unknown to string
// let s1: string= vUnknown as string //allowed
//convert string to number
//let a:string="1";
//let b:number= a as number  //not allowed
//let b:number= (a as unknown) as number  // allowed
//ARRAYS
var listOfStudents = ["ali", "hasan", "ahemd", "naeem"];
listOfStudents.push("ghumman");
listOfStudents[0] = "welcome";
console.log(listOfStudents);
//MIXED ARRAYS
var mixexArray = [];
mixexArray.push("hello");
mixexArray.push(20);
mixexArray.push(50);
mixexArray.push("world");
console.log(mixexArray);
//TOUPLES VS ARRAYS
var users = ["j", 10, false];
users[0] = false; //allowed in array
//Touple
var topUser = ["k", 20, true];
// topUser[0]=false;//types are fixed ig gives error
topUser[0] = "l"; //allowed because same type
//OBJECTS
var user = {
    name: "Ali",
    age: 50,
    isYoung: false
};
user.age = 70;
console.log(user);
var newUser;
newUser = {
    name: "google",
    age: 50
};
console.log(newUser);
var InvoiceOne = new classesAndAccessModifier_1.Invoice("google", 500, "dsjfksd fks");
console.log(InvoiceOne);

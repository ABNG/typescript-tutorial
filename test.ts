import {Invoice} from './classesAndAccessModifier';
import {google} from './functions';
//or  import {google as g} from './functions'
//or  import * as g from './functions'  //then access like that:  g.google()

let my_name:string="ABu Bakar";
let age:number=55;
let isOld:boolean=false;
let futureDecide: string|number;
futureDecide=90;

// let myValue:string=null;
// let myValue:null=null;
// let undefinedValue: undefined = undefined;
// let numericValue: number = undefined;

const circ=(diameter: number)=>{
    return diameter * Math.PI
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
let listOfStudents:string[]=["ali","hasan","ahemd","naeem"];
listOfStudents.push("ghumman");
listOfStudents[0]="welcome";
console.log(listOfStudents);

//MIXED ARRAYS
let mixexArray: (string|number|boolean)[]=[];
mixexArray.push("hello");
mixexArray.push(20);
mixexArray.push(50);
mixexArray.push("world");
console.log(mixexArray);

//TOUPLES VS ARRAYS

let users =["j",10,false];
users[0]=false; //allowed in array

//Touple
let topUser: [string,number,boolean]=["k",20,true];
// topUser[0]=false;//types are fixed it gives error
topUser[0]="l";//allowed because same type

//Touple Array
let topUser: [string,number,boolean][]=[["k",20,true],["k",20,false]];
topUser[0]=["k",50,true];//allowed because same type
topUser[0][0]="M";//allowed because same type


//OBJECTS

let user: any = {
    name:"Ali",
    age: 50,
    isYoung: false
};
user.age=70;
console.log(user);

let newUser:{
    name: string,
    age: number,
};
newUser={
    name:"google",
    age: 50
};
console.log(newUser);

const InvoiceOne= new Invoice("google",500,"dsjfksd fks");
console.log(InvoiceOne);

// type quantity=100| 200;

// let myQuantity: quantity = 200;  //myQuantity can only be 100 or 200. no other value acceptable.

console.log(google());


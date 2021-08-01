"use strict";
/*
access modifiers
public, private, readonly
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    // readonly client: string; // we only read this property we cannot update it only set through constructor
    // private amount: number; //we cannot access outside the class at line 23
    // protected details: string; //Protected members can be accessed only within the class and by the instance of its sub/child class
    //  static aged: number;
    // constructor(c:string,a:number,d:string) {
    // this.client=c;
    // this.amount=a;
    // this.details=d;
    // }
    //easy way
    function Invoice(client, amount, details) {
        this.client = client;
        this.amount = amount;
        this.details = details;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
exports.Invoice = Invoice;
var InvoiceOne = new Invoice("google", 500, "dsjfksd fks");
var InvoiceTwo = new Invoice("google", 300, "dsjfksd fks");
// InvoiceOne.amount=20;
console.log(InvoiceOne.format());
var objects = [];
objects.push(InvoiceOne);
objects.push(InvoiceTwo);
console.log(objects);

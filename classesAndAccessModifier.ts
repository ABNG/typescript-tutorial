/*
access modifiers
public, private, protected, readonly
 */

export class Invoice{
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
    constructor(readonly client:string,private amount:number,protected details:string) {}

    format(): string{
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}

const InvoiceOne= new Invoice("google",500,"dsjfksd fks");
const InvoiceTwo= new Invoice("google",300,"dsjfksd fks");
// InvoiceOne.amount=20;
console.log(InvoiceOne.format());

let objects: Invoice[]=[];
objects.push(InvoiceOne);
objects.push(InvoiceTwo);
console.log(objects);

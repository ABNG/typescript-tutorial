
type myNumber=string | number;

const greeting:Function=(a:number,b:number,c?:myNumber,d:number=20) : void =>{
    if(c>0)
    console.log(a*b*c);
    else
        console.log(a*b);
}
const greeting2:Function=(a:number,b:number,c?:myNumber): number  => c > 0 ? a * b * c : a * b;

greeting(10,20,20);
console.log(greeting2(10,20,20));
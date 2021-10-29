interface FirstPerson{
    name: string,
    email: string,
    password?:string, //make it optional
    speak(name: string): void,
    talk(email: string): string,
}

const user: FirstPerson={
    name:"hello",
    email:"abng@g.com",
    password:"123456",
    speak:(name: string) =>{
            console.log(name);
    },
    talk:(email: string) => {
        return email;
    }
};
user.speak("google");
console.log(user);
console.log(user.talk("google"));

class Payment implements  FirstPerson{

    //easy way
    constructor(readonly client:string,private amount:number,protected details:string) {}

    format(): string{
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }

    email: string="world";
    name: string="hello";

    speak(name: string): void {

    }

    talk(email: string): string {
        return "";
    }
}

enum User{
OPEN= "OPEN",
    CLOSED = "CLOSED",
    UP = "UP",
    DOWN = "DOWN"
}

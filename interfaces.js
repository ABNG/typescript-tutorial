"use strict";
var user = {
    name: "hello",
    email: "abng@g.com",
    password: "123456",
    speak: function (name) {
        console.log(name);
    },
    talk: function (email) {
        return email;
    }
};
user.speak("google");
console.log(user);
console.log(user.talk("google"));
var Payment = /** @class */ (function () {
    //easy way
    function Payment(client, amount, details) {
        this.client = client;
        this.amount = amount;
        this.details = details;
        this.email = "world";
        this.name = "hello";
    }
    Payment.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    Payment.prototype.speak = function (name) {
    };
    Payment.prototype.talk = function (email) {
        return "";
    };
    return Payment;
}());

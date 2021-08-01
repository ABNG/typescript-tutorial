"use strict";
var greeting = function (a, b, c, d) {
    if (d === void 0) { d = 20; }
    if (c > 0)
        console.log(a * b * c);
    else
        console.log(a * b);
};
var greeting2 = function (a, b, c) { return c > 0 ? a * b * c : a * b; };
greeting(10, 20, 20);
console.log(greeting2(10, 20, 20));

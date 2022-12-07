"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
function distance(circle1, circle2, d) {
    var distance = Math.pow(circle1.radius - circle2.radius, 2) + Math.pow(d, 2);
    // Math.pow(x,y)= Công thức x mũ y
    return Math.sqrt(distance);
}
var circle1 = new Circle_1["default"](20);
var circle2 = new Circle_1["default"](5);
console.log(distance(circle1, circle2, 30));

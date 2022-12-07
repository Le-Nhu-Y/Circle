import Circle from "./Circle";

function distance(circle1: Circle, circle2: Circle, d: number): number {
    let distance = Math.pow(circle1.radius - circle2.radius, 2) + Math.pow(d, 2);
    // Math.pow(x,y)= Công thức x mũ y
    return Math.sqrt(distance);
}
let circle1 = new Circle(20);
let circle2 = new Circle(5);

console.log(distance(circle1, circle2, 30));
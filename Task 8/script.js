/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
    this.sum = function (a, b) {
        return a + b;
    };
    this.subtraction = function (a, b) {
        return Math.abs(a - b);
    };
    this.multiplication = function (a, b) {
        return a * b;
    };
    this.division = function (a, b) {
        return a / b;
    };
}
const calc = new Calculator();

let a = prompt("Enter the first number:");
while (!a || isNaN(Number(a))) {
    a = prompt("Enter the first number:");
}
let b = prompt("Enter the second number:");
while (!b || isNaN(Number(b))) {
    b = prompt("Enter the second number:");
}
a = Number(a);
b = Number(b);

console.log(`${a} & ${b} sum = ` + calc.sum(a, b))
console.log(`${a} & ${b} subtraction = ` + calc.subtraction(a, b))
console.log(`${a} & ${b} multiplication = ` + calc.multiplication(a, b))
console.log(`${a} & ${b} division yra = ` + calc.division(a, b))
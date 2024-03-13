"use strict";
// Optional parameter
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log('Add: ' + add(1, 2));
console.log('Add: ' + add(1, 2, 3));
// Default parameter
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log('Subtract: ' + sub(2, 1));
console.log('Subtract: ' + sub(2, 1, 1));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log('Multiply: ' + mult(2, 3));
// REST parameter
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
console.log('Add2: ' + add2(1, 2, 3, 4, 5, 6, 7));
let numbers = [3, 4, 5, 6, 7];
console.log('Add2: ' + add2(1, 2, ...numbers));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d", "e"]);
console.log('concatResult: ' + concatResult);
console.log('concatString: ' + concatString);

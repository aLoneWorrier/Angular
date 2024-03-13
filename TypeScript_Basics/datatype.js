"use strict";
let fname;
fname = 'Krishna';
let newName = fname.toUpperCase();
console.log('Name: ' + newName);
let age;
console.log('Age: ' + parseInt('26.3'));
let isValid = false;
console.log('isValid: ' + isValid);
let empList;
let numList;
empList = ["krishna", "Sai", "Madamanchi"];
numList = [1, 2, 3, 4, 5];
console.log('empList: ' + empList);
console.log('numList: ' + numList.filter((num) => (num % 2) == 0));
console.log('reduce:' + numList.reduce((acc, num) => acc + num));
let c = 1 /* Color.Green */;
console.log('Color: ' + c);
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(1, 2);
console.log('swapNums: ' + swapNums);
// Don't use any, it is not advisable
// let department : any;
// department = 'IT';
// department = 10;

// Optional parameter
function add(num1: number, num2: number, num3?: number) : number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log('Add: ' + add(1,2));
console.log('Add: ' + add(1,2,3));

// Default parameter
const sub = (num1: number, num2: number, num3 = 10) : number => num1 - num2 - num3;
console.log('Subtract: ' + sub(2,1));
console.log('Subtract: ' + sub(2,1,1));

const mult = function (num1: number, num2: number) : number {
    return num1 * num2;
}
console.log('Multiply: ' + mult(2,3));

// REST parameter
function add2(num1: number, num2: number, ...num3: number[]) : number {
    return num1 + num2 + num3.reduce((a,b) => a + b, 0);
}
console.log('Add2: ' + add2(1,2,3,4,5,6,7));   
let numbers = [3,4,5,6,7];
console.log('Add2: ' + add2(1,2,...numbers)); 

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5]);
let concatString = getItems<string>(["a", "b", "c", "d", "e"]);

console.log('concatResult: ' + concatResult);
console.log('concatString: ' + concatString);
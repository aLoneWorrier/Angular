let fname : String;

fname = 'Krishna';
let newName = fname.toUpperCase();
console.log('Name: ' + newName);

let age : number;
console.log('Age: ' + parseInt('26.3'));

let isValid : boolean = false;
console.log('isValid: ' + isValid);

let empList : string[];
let numList : Array<number>;
empList = ["krishna", "Sai", "Madamanchi"];
numList = [1,2,3,4,5];
console.log('empList: ' + empList);
console.log('numList: ' + numList.filter((num) => (num%2) == 0));
console.log('reduce:' + numList.reduce((acc, num) => acc + num));

const enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Green;
console.log('Color: ' + c);

let swapNums : [number, number];

function swapNumbers(num1:number, num2: number) : [number, number]{
    return [num2, num1];
}
swapNums = swapNumbers(1,2);
console.log('swapNums: ' + swapNums);

// Don't use any, it is not advisable
// let department : any;
// department = 'IT';
// department = 10;


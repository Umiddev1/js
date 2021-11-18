let number = 123;

let qoldiq = number % 100; //23
let number2 = qoldiq % 10; //3
let number3 = (qoldiq - number2) // 20
let number4 = (number - qoldiq) // 100
let number5 = number4 / 10; // 10 
let sum = number3 * 10 + number5 + number2; // 213

console.log(sum);

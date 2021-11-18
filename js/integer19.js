let a = 241;

let qoldiq = a % 10; //1
let num1 = a / 10; //24.1
let num2 = Math.trunc(num1); //24
let num3 = num2 % 10; //4
let num4 = Math.trunc(num3) -2; //2
let sum1 = (num4 + num3) + qoldiq;
let sum2 = (num4 * num3) * qoldiq;

console.log(sum1,sum2);
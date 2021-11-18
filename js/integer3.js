let n = 765;

let qoldiq = n % 10;
let n1 = (n - qoldiq) / 10;
let n2 = n1 % 10; 
let n3 = (n1 - n2) / 10;
let natija = 100 * qoldiq + n2 * 10 + n3;
console.log(natija);
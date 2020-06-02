'use strict';
// let data = [1,2,3,4,5,6,7,8,9];
// let xx = data[0];
// let [x0,x1,x2,x3,x4,x5,other] = data;
// console.log(xx);
// console.log(x5);
// console.log(other);

let x = 1;
let y = 2;
[x,y] = [y,x];
console.log(x);

let a = 1;
let b = '1';
console.log(a == b);
console.log(a === b);
"use strict"
// let number = [1,2,3];
// console.log(number[0]);
// number[0] = 0;
// console.log(number[0]);
// console.log(number.length); // 3

let items = [
  {
    name:"sato",
    age:27,
    favorite:{
      music:"guitar",
      sports:"basketball",
      foods:["玄米","カレー","寿司"]
    }
  },
  {name:"saito",age:29},
]
console.log(items[0].favorite.foods[0]) // 玄米
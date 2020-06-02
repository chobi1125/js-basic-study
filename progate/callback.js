// const numbers = [1,2,3];
// numbers.forEach((number)=>{
//   console.log(number);
// })

// const People = [
//   {name:"sato",age:27},
//   {name:"saito",age:24},
//   {name:"suzuki",age:25}
// ]

// const filteredPeople = People.filter((person)=>{
//   return person.age >= 25;
// });

// console.log(filteredPeople);

// const call = function(callback) {
//   callback("sato", 27);
// };
const call = (callback) => {
  callback("sato", 27);
};
call((name, age) => {
  console.log(`${name}は${age}歳です。`);
});

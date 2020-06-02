const print = console.log;

// let obj = {x:3,y:4};
// console.log(obj.x);

// let obj2 = {pos:{x:3,y:4}};
// print(obj2.pos.y);

// obj.x = 33;
// print(obj.x);

// obj.z = 5;
// print(obj.z);

let obj = {};
// let obj = new Object();
obj.fn = function(a,b){
  return a + b ;
};
print(obj.fn(44,55));

print(obj);

let s = new String('abc');
print(s[0]);
print(s[1]);
print(s[2]);

print(s.toUpperCase());
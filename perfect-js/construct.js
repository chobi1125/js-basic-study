function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person1 = new Person('太郎', 22);
var person2 = new Person('次郎', 31);
// 「new」を付けることで、生成されるインスタンスが「this」にセットされる
 
console.log( person1.name );
console.log( person1.age );
 
console.log( person2.name );
console.log( person2.age );
console.log( typeof person1);
console.log( typeof person1.name);
console.log( typeof person1.age);

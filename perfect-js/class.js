const print = console.log;

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.show = function() {
    print(this.name,this.age);
  }
}

var person1 = new Person('太郎', 22);
var person2 = new Person('次郎', 31);
// 「new」を付けることで、生成されるインスタンスが「this」にセットされる
person1.show();
person2.show();

 
// console.log( person2.name );
// console.log( person2.age );


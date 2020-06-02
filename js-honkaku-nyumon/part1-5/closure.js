function closure (init) {
  var counter = init ;

  return function () {
    return ++counter;
  }
}

var myClosure = closure(1);
console.log(myClosure()); // 2
console.log(myClosure()); // 3
console.log(myClosure()); // 4

function sum(a,b){
  var c = 3;
  return a+b+c ;
}

var sum = sum(3,5);
console.log(c);
console.log(sum);
function MyClass(x,y){
  this.x = x;
  this.y = y;
}
MyClass.prototype.show = function() {
  console.log(this.x,this.y);
}

var obj = new MyClass(3,2)

obj.show();
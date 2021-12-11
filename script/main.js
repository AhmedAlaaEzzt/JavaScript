function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.age = 3;

let fluffy = new Cat("Fluffy", "White");
fluffy.age = 5;

let muffin = new Cat("Muffin", "Brown");

console.log("Cat.prototype", Cat.prototype.age);
console.log("fluffy.age", fluffy.age);
console.log("fluffy.__proto__.age", fluffy.__proto__.age);
console.log("muffin.age", muffin.age);

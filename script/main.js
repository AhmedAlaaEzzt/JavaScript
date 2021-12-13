function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.age = 4;

let fluffy = new Cat("Fluffy", "White");
let muffin = new Cat("Muffin", "Brown");

Cat.prototype = { age: 5 };
let snowbell = new Cat("Snowbell", "white");

console.log("fluffy.age", fluffy.age);
console.log("muffin.age", muffin.age);
console.log("snowbell.age", snowbell.age);

console.log("Cat.prototype", Cat.prototype.age);

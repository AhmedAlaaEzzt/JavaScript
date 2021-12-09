function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.age = 3;

let fluffy = new Cat("Fluffy", "White");
let muffin = new Cat("Muffin", "Brown");

console.log(fluffy.age);

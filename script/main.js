let obj = { a: "a", b: "b", c: "c" };
let clone1 = obj;
let clone2 = obj;

obj.c = "hi";
console.log("obj", obj);
console.log("clone1", clone1);
console.log("clone2", clone2);

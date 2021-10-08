let obj = { 
    a: "a", 
    b: "b", 
    c: { deep: "try and copy me!" } 
};
//shallow clone
let clone1 = Object.assign({}, obj)
let clone2 = {...obj}
let superClone = {...obj}

obj.b="hi";
obj.c.deep ="heheheheh";
console.log("obj", obj);
console.log("clone1", clone1);
console.log("clone2", clone2);
console.log("superClone",superClone)
let obj = {
    a: 100,
    b: 200
  };
  let myVar = 555;
  delete obj.a;
  delete obj;
  delete myVar;
  
  console.log(obj.a);
  console.log(obj);
  console.log(myVar);
  
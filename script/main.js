let car = {
  id: 123,
  color: "red",
};

Object.defineProperty(car, "id", { enumerable: false, writable: false });
console.log(Object.getOwnPropertyDescriptor(car, "id"));

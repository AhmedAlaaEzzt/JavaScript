let price = 5.99,
  quantity = 30;
let productView = {
  price,
  quantity,
  calculateValue() {
    return this.price * this.quantity;
  }
};
console.log(productView.calculateValue());

"use strict";
let invoice = {
  number: 123,
  process: function() {
    let fun = () => {
      console.log(this);
    };
    fun();
  }
};
invoice.process();

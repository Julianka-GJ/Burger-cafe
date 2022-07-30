"use strict";

var BURGER_SIZE = {
  LiGTH: {
    label: 'S',
    price: 50,
    kcal: 20
  },
  CLASSIC: {
    label: 'M',
    price: 75,
    kcal: 30
  },
  ROYAL: {
    label: 'L',
    price: 100,
    kcal: 40
  }
};
var TOPPINGS = {
  cheese: {
    label: 'Cheese',
    price: 10,
    kcal: 20
  },
  salad: {
    label: 'Salad',
    price: 20,
    kcal: 5
  },
  potato: {
    label: 'Potato',
    price: 15,
    kcal: 10
  },
  seasoning: {
    label: 'Seasoning',
    price: 15,
    kcal: 0
  },
  mayonnaise: {
    label: 'Mayonnaise',
    price: 20,
    kcal: 5
  }
};

function Burgers(size) {
  var toppings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var discount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  this.size = size;

  if (discount > 75) {
    discount = 0;
  }

  this.toppings = toppings;
  this.discount = discount;

  this.getPrice = function () {
    var price = this.toppings.reduce(function (price, topping) {
      return price + topping.price;
    }, this.size.price);

    if (this.discount > 0) {
      price = price / 100 * this.discount;
    }

    return price;
  };

  this.getKCal = function () {
    return this.toppings.reduce(function (kcal, topping) {
      return kcal + topping.kcal;
    }, this.size.kcal);
  };

  this.addTopping = function (topping) {
    this.toppings.push(topping);
  };

  this.printRecipe = function () {
    console.log("\n-------------------\nBURGER SIZE: ".concat(this.size.label, "\nPRICE $").concat(this.getPrice(), " ").concat(this.discount ? "DISCOUNT ".concat(discount, "%") : '', "\n").concat(this.getKCal(), " kcal \ntoppings: ").concat(toppings.map(function (e) {
      return e.label;
    }).join(' | '), "\n-------------------"));
  };
}

var smallBurger = new Burgers(BURGER_SIZE.LiGTH, [TOPPINGS.cheese], 10);
smallBurger.addTopping(TOPPINGS.cheese);
smallBurger.addTopping(TOPPINGS.potato);
smallBurger.printRecipe();
var mediumBurger = new Burgers(BURGER_SIZE.CLASSIC, [], null);
mediumBurger.printRecipe();
var largeBurger = new Burgers(BURGER_SIZE.ROYAL, [], null);
largeBurger.printRecipe();
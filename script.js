const BURGER_SIZE = {
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
}

const TOPPINGS = {
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
}

function Burgers(size, toppings = [], discount = 0) {
    this.size = size;
    if (discount > 75) {
        discount = 0;
    }
    this.toppings = toppings;
    this.discount = discount;

    this.getPrice = function() {
        let price = this.toppings.reduce((price, topping) => price + topping.price, this.size.price);
        if (this.discount > 0) {
            price = (price/100 * this.discount)}
        return price;
    };

    this.getKCal = function() {
        return this.toppings.reduce((kcal, topping) => kcal + topping.kcal, this.size.kcal);
    };

    this.addTopping = function(topping) {
        this.toppings.push(topping);
    }

    this.printRecipe = function() {
        console.log(`
-------------------
BURGER SIZE: ${this.size.label}
PRICE $${this.getPrice()} ${this.discount ? `DISCOUNT ${discount}%` : ''}
${this.getKCal()} kcal 
toppings: ${toppings.map(e => e.label).join(' | ')}
-------------------`
        );
    };
}

const smallBurger = new Burgers(BURGER_SIZE.LiGTH, [TOPPINGS.cheese], 10);
smallBurger.addTopping(TOPPINGS.cheese);
smallBurger.addTopping(TOPPINGS.potato);
smallBurger.printRecipe();
const mediumBurger = new Burgers(BURGER_SIZE.CLASSIC, [], null);
mediumBurger.printRecipe();
const largeBurger = new Burgers(BURGER_SIZE.ROYAL, [], null);
largeBurger.printRecipe();


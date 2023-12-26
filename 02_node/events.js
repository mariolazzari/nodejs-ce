const EventEmitter = require("node:events");
const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, toppping) => {
  console.log(`Order received: baking a ${size} pizza with ${toppping}.`);
});

emitter.on("order-pizza", size => {
  if (size === "large") {
    console.log("Serving coplementary drink.");
  }
});

console.log("before emitting events");
emitter.emit("order-pizza", "large", "mushroom");
emitter.emit("order-pizza", "small", "cheese");

console.log("\nPizza Shop");
const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order-pizza", (size, toppping) => {
  console.log(`Order received: baking a ${size} pizza with ${toppping}.`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "mushrooms");
pizzaShop.displayOrderNumber();

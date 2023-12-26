const add2 = require("./add");
require("./batman");
require("./superman");
require("./iife");
const SuperHero = require("./super-hero");
const { add, subtract } = require("./math");
const data = require("./data.json");

console.log("Hello from index.js");
const sum = add2(1, 2);
console.log("Sum:", sum);

const batman = new SuperHero("Batman");
console.log(batman.getName());
batman.setName("Bruce Wayne");
console.log(batman.getName());

const superman = new SuperHero("Superman");
console.log(superman.getName());

console.log("Add", add(1, 2));
console.log("Subtract", subtract(1, 2));

console.log("Data", data);
console.log("name", data.name);

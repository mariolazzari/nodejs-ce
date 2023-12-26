function greet(name) {
  console.log(`Hello ${name}`);
}

// hof(callback)
function greetMario(greetFn) {
  const name = "Mario";
  greetFn(name);
}

greetMario(greet);

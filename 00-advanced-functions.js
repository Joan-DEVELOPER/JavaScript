// Funciones avanzadas con "Ciudadanos de primera classe"

// Ciudadanos de primera clase
const greet = function (name) {
  console.log(`Hola, ${name}`);
};

greet("Joan");

function processGreeting(greetFunction, name) {
  greetFunction(name);
}

function returnGreeting() {
  return greet;
}

processGreeting(greet, "JoanDEV");

console.log(returnGreeting());

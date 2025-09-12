// - Retorno implícito
const multiply = (a, b) => a * b;
console.log(multiply(2, 5));

// - this léxico
const handler = {
  name: "Joan",
  greeting: function () {
    console.log(`Alias ${this.name}`);
  },

  arrowGreeting: () => {
    console.log(`Es decir, ${this.name}`);
  },
};
handler.greeting();
handler.arrowGreeting();

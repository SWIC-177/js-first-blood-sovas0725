const person = {
  name: "Doe John",
  age: 74,
  isAdult: true,
};

function developSalutation(single) {
  return (greeting) => `${greeting}, ${single.name}!`;
}

const greetDoe = developSalutation(person);
console.log(greetDoe("Hello")); // Hello, Doe John!

const greetBob = developSalutation({
  name: "Bob Doe",
  age: 12,
  isAdult: false,
});
console.log(greetBob("Hi")); // Will output: Hi, Bob Doe!

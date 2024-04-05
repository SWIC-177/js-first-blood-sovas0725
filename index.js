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

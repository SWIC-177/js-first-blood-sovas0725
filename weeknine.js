// Function that compares the age
function verifyAdulthood(name, age) {
  if (age >= 18) return `Welcome, ${name}`;
  return `You are not old enough to enter, ${name}.`;
}

// Variables
const name = "Shane";
const age = "18";

// Print output to console
console.log(verifyAdulthood(name, age));

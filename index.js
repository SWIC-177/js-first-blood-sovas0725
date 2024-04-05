// Multiplies numbers by a factor
function multiplyNumbers(factor) {
  return (number) => number * factor;
}

// Doubles the multiplier
const double = multiplyNumbers(2);
console.log(double(20)); // Will output: 40

// Triples the multiplier
const triple = multiplyNumbers(3);
console.log(triple(7)); // WIll output : 21

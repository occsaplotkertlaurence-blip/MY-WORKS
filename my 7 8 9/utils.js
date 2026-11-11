function double(x) {
    return x * 2;
}
function capitalize(text) {
    if (typeof text !== 'string') {
        return 'Error: text must be a string';
    }
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function average(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return 'Error: provide a non-empty array of numbers';
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

function greet(name = "Guest") {          // default parameter
  if (typeof name !== "string") {         // guard clause
    return "Invalid name";
  }
  return "Hello, " + name + "!";
}

console.log(double(5));              // normal
console.log(double(0));              // boundary
console.log(double("abc"));          // invalid -> NaN
console.log(capitalize("hello"));    // normal
console.log(capitalize(""));         // boundary -> empty string
console.log(capitalize(42));         // invalid
console.log(average([80, 90, 100])); // normal
console.log(average([5]));           // boundary
console.log(average([]));            // invalid
console.log(greet("Maria"));         // normal
console.log(greet());                // default parameter
console.log(greet(123));             // invalid 
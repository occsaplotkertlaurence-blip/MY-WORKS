/*
 * Purpose: Reusable function library, refactored to arrow functions (Lab 8)
 * Author: Saplot, Kert Laurence B.
 * Date: October 5 2026
 * Course: BSIT
 */

// ===== MATHEMATICAL FUNCTIONS =====
// Single-expression logic -> concise arrow bodies (no braces, no return)

/** Adds two numbers. @param {number} a @param {number} b @returns {number} */
const add = (a, b) => a + b;

/** Subtracts b from a. @param {number} a @param {number} b @returns {number} */
const subtract = (a, b) => a - b;

/** Multiplies two numbers. @param {number} a @param {number} b @returns {number} */
const multiply = (a, b) => a * b;

/** Raises a to the power b. @param {number} a @param {number} b @returns {number} */
const power = (a, b) => a ** b;

// Guard clauses need an early return, so these keep a block body

/** Divides a by b. @param {number} a @param {number} b @returns {number|string} */
const divide = (a, b) => {
  if (b === 0) return 'Error: cannot divide by zero';
  return a / b;
};

/** Remainder of a / b. @param {number} a @param {number} b @returns {number|string} */
const modulus = (a, b) => {
  if (b === 0) return 'Error: cannot divide by zero';
  return a % b;
};

/**
 * Total price including VAT.
 * @param {number} price @param {number} quantity @param {number} [vatRate=0.12]
 * @returns {number|string}
 */
const calculateTotal = (price, quantity, vatRate = 0.12) => {
  if (typeof price !== 'number' || typeof quantity !== 'number') {
    return 'Error: price and quantity must be numbers';
  }
  const subtotal = multiply(price, quantity);
  return Number(multiply(subtotal, add(1, vatRate)).toFixed(2));
};

// STAYS A NAMED DECLARATION: recursive (calls itself by name) - see justification
/**
 * Factorial of a whole number (recursive).
 * @param {number} n - A whole number >= 0.
 * @returns {number|string}
 */
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) return 'Error: n must be a whole number >= 0';
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// ===== STRING FUNCTION =====

/** Capitalizes the first letter. @param {string} [text=''] @returns {string} */
const capitalize = (text = '') => {
  if (typeof text !== 'string') return 'Error: text must be a string';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// ===== DATA-PROCESSING FUNCTION =====

/** Average of an array. @param {number[]} numbers @returns {number|string} */
const average = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 'Error: provide a non-empty array of numbers';
  }
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
};

// ===== TESTS (console.log stays OUTSIDE the functions) =====

// --- 1. Math functions: 12 and 8 (or 2 and 10) ---
console.log('12 + 8   =', add(12, 8));         // 20
console.log('12 - 8   =', subtract(12, 8));    // 4
console.log('12 * 8   =', multiply(12, 8));    // 96
console.log('12 / 8   =', divide(12, 8));      // 1.5
console.log('12 % 8   =', modulus(12, 8));     // 4
console.log('2 ** 10  =', power(2, 10));       // 1024
console.log('12 / 0   =', divide(12, 0));      // error message
console.log('5!       =', factorial(5));       // 120

// --- 2. String and data functions ---
console.log('Capital  =', capitalize('hello'));          // Hello
console.log('Default  =', JSON.stringify(capitalize())); // "" (default parameter)
console.log('Average  =', average([80, 90, 100]));       // 90
console.log('Avg []   =', average([]));                  // error message

// --- 3. Price with VAT (original Week 4 logic) ---
// price: cost of one item in pesos
const price = 250;
// quantity: number of items being bought
const quantity = 3;
// VAT_RATE: value-added tax rate, 12% written as a decimal
const VAT_RATE = 0.12;

// subtotal: price of all items before tax (250 * 3)
const subtotal = price * quantity;
// total: subtotal plus the tax amount, calculated in two steps
const total = subtotal + subtotal * VAT_RATE;
// clearer: the same total in one step (1 + 0.12 means "100% + 12% tax")
const clearer = subtotal * (1 + VAT_RATE);

console.log('Subtotal:', subtotal);
console.log('Total   :', total);
console.log('Clearer :', clearer);   // may show floating-point noise (see section 4)
// Refactored: the same job done by the reusable function, rounded to 2 decimals
console.log('Function:', calculateTotal(price, quantity));   // 840

// --- 4. Floating-point rounding ---
// Computers store decimals in binary, so 0.1 + 0.2 is slightly off
console.log(0.1 + 0.2);                       // 0.30000000000000004
// toFixed(2) rounds to 2 decimal places but returns a string
console.log((0.1 + 0.2).toFixed(2));          // '0.30'
// Number() turns that string back into a number
console.log(Number((0.1 + 0.2).toFixed(2)));  // 0.3

// --- 5. Counter ---
// attempts: counter that starts at 0 and goes up (let, because its value changes)
let attempts = 0;
// += 1 adds 1 to the current value
attempts += 1;   // 1
// ++ also adds 1 (shorthand for the same thing)
attempts++;      // 2
console.log('Attempts:', attempts);
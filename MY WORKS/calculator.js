/*
 * Purpose: Perform basic arithmetic operations
 * Author: Saplot, Kert Laurence B.  
 * Date: October 5 2026
 * Course: BSIT
 */

// a, b: the two numbers to add together
function add(a, b)      { return a + b; }
// a, b: a is the number being subtracted from, b is the amount taken away
function subtract(a, b) { return a - b; }
// a, b: the two numbers to multiply
function multiply(a, b) { return a * b; }

// a, b: a is the dividend (number being divided), b is the divisor
function divide(a, b) {
  // Dividing by zero is not allowed, so return an error message instead of Infinity
  if (b === 0) return 'Error: cannot divide by zero';
  // Normal case: return the quotient
  return a / b;
}

// a, b: a is the dividend, b is the divisor; the result is the remainder
function modulus(a, b) {
  // A zero divisor would give NaN, so guard it the same way as divide()
  if (b === 0) return 'Error: cannot divide by zero';
  // Normal case: return the remainder of a / b
  return a % b;
}

// a, b: a is the base, b is the exponent (a raised to the power of b)
function power(a, b)    { return a ** b; }

// ===== 2. Test the functions =====

// Each call passes 12 and 8 (or 2 and 10) and prints the label with the result
console.log('12 + 8  =', add(12, 8));        // 20
console.log('12 - 8  =', subtract(12, 8));   // 4
console.log('12 * 8  =', multiply(12, 8));   // 96
console.log('12 / 8  =', divide(12, 8));     // 1.5
console.log('12 % 8  =', modulus(12, 8));    // 4
console.log('2 ** 10 =', power(2, 10));      // 1024
// Dividing by zero returns the error message instead of a number
console.log('12 / 0  =', divide(12, 0));     // Error message

// ===== 3. Price with VAT =====

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
// clearer: the same total in one step, because 1 + 0.12 means "100% + 12% tax"
// (prints 840.0000000000001 because of the floating-point rounding shown in section 4)
const clearer = subtotal * (1 + VAT_RATE);

console.log('Subtotal:', subtotal);
console.log('Total   :', total);
console.log('Clearer :', clearer);

// ===== 4. Floating-point rounding =====

// Computers store decimals in binary, so 0.1 + 0.2 is slightly off
console.log(0.1 + 0.2);                       // 0.30000000000000004
// toFixed(2) rounds to 2 decimal places but returns a string
console.log((0.1 + 0.2).toFixed(2));          // '0.30'
// Number() turns that string back into a number
console.log(Number((0.1 + 0.2).toFixed(2)));  // 0.3

// ===== 5. Counter =====

// attempts: counter that starts at 0 and goes up (let, because its value changes)
let attempts = 0;
// += 1 adds 1 to the current value
attempts += 1;   // 1
// ++ also adds 1 (shorthand for the same thing)
attempts++;      // 2
console.log('Attempts:', attempts);
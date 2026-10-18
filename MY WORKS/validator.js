/*
 * Purpose:  Calculate validation expenses and display student information   
 * Author: Saplot, Kert Laurence B.  
 * Date: October 5 2026
 * Course: BSIT
 */

// Loose equality converts types first, so number 5 equals string '5': true
console.log(5 == '5');
// Strict equality compares type and value, and number differs from string: false
console.log(5 === '5');
// Loose equality treats null and undefined as equal: true
console.log(null == undefined);
// Strict equality sees different types: false
console.log(null === undefined);
// NaN is never equal to anything, even itself: false
console.log(NaN === NaN);

// ===== 2. Truthy and falsy values =====

// An empty string is falsy: false
console.log(Boolean(''));
// A non-empty string is truthy, even '0': true (surprising)
console.log(Boolean('0'));
// An empty array is still an object, so it is truthy: true (surprising)
console.log(Boolean([]));

// ===== 3. || versus ?? =====

// nickname: an empty string, used to test the two fallback operators
const nickname = '';
// || falls back on ANY falsy value, and '' is falsy: prints 'Guest'
console.log(nickname || 'Kert Laurence Saplot');
// ?? falls back only on null or undefined, so '' is kept: prints an empty line
console.log(nickname ?? 'Kert Laurence Saplot           ');

// ===== 4. Ternary operator =====

// score: the numeric grade being checked against the passing mark
const score = 78;
// condition ? valueIfTrue : valueIfFalse, and 78 >= 75, so: PASSED
console.log(score >= 75 ? 'PASSED' : 'FAILED');

// ===== 5. Account validation =====

// account: the sample user record that will be validated
const account = {
  // username: login name, must be at least 4 characters
  username: 'jsantos',
  // password: must be at least 8 characters (this one is exactly 8)
  password: 'Occ2026!',
  // age: must be between 16 and 70
  age: 19,
  // status: must be 'active'
  status: 'active'
};

// data: the account object passed in to be checked
function validate(data) {
  // errors: collects one message for every rule that fails
  const errors = [];

  // Fails if username is missing/empty or shorter than 4 characters
  if (!data.username || data.username.length < 4) {
    errors.push('Username must be at least 4 characters');
  }
  // Fails if password is missing or shorter than 8 characters (guard added to prevent a crash)
  if (!data.password || data.password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  // Fails if age is below 16 or above 70
  if (data.age < 16 || data.age > 70) {
    errors.push('Age must be between 16 and 70');
  }
  // Fails if the account is anything other than 'active'
  if (data.status !== 'active') {
    errors.push('Account is not active');
  }

  // No errors collected means everything passed, otherwise return the list of problems
  return errors.length === 0 ? 'All valid' : errors;
}

// Run the validation on the sample account and print the result
console.log(validate(account));
/*
 * Purpose: Assess a student's grade and return the corresponding evaluation   
 * Author: Saplot, Kert Laurence B.  
 * Date: October 5 2026
 * Course: BSIT
 */
// score: the numeric grade passed into the function (expected range 0-100)
function assessGrade(score) {
  // Reject anything outside the valid 0-100 range
  if (score < 0 || score > 100) return 'Invalid score';

  if (score >= 95) return 'Excellent';
  else if (score >= 85) return 'Very Good';
  else if (score >= 75) return 'Passing';
  else return 'Failing';
}

// tests: boundary values used to check each grade cutoff, plus out-of-range values
const tests = [-5, 0, 74, 75, 84, 85, 94, 95, 100, 120];

// t: the current score from the tests array on each loop iteration
for (const t of tests) {
  console.log(`Score ${t} -> ${assessGrade(t)}`);
} // <-- this closing brace was missing 
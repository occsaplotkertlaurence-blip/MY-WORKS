/*
 * Purpose: This file contains utility functions for computing discounts, initials, highest scores, and tips.
 * Author: Saplot, Kert Laurence B.  
 * Date: NOVEMBER 1, 2026
 * Course: BS Information Technology
 */


function computeDiscount(price, percent = 10) {
  // if price isn't a number just stop here
  if (typeof price !== 'number') return 'Numbers only';

  let discountAmount = price * (percent / 100);
  let finalPrice = price - discountAmount;

  return Number(finalPrice.toFixed(2));
}

// ----- names -----
function getInitials(first, last) {
  // grab the first letter of each name and make it a capital
  let f = first[0].toUpperCase();
  let l = last[0].toUpperCase();

  return `${f}.${l}.`;
}

// ----- scores -----
function findHighest(scores) {
  let highest = scores[0]; // start with the first one

  for (const s of scores) {
    if (s > highest) {
      highest = s; // found a bigger one, so swap it in
    }
  }

  return highest;
}

// ----- tip -----
function computeTip(bill, tipRate = 0.10) {
  // TODO: maybe round up to the nearest peso later
  return Number((bill * tipRate).toFixed(2));
}

// testing everything
console.log('discount:', computeDiscount(500, 20));   // 400
console.log('discount default:', computeDiscount(250)); // 225
console.log('discount bad input:', computeDiscount('abc')); // Numbers only
console.log('initials:', getInitials('Ana', 'Reyes')); // A.R.
console.log('highest:', findHighest([88, 62, 95, 74, 81])); // 95
console.log('tip:', computeTip(500));                  // 50
console.log('tip 15%:', computeTip(500, 0.15));        // 75
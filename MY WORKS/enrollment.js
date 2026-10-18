/*
 * Purpose: Calculate enrollment expenses and display student information.
 * Author: kent joseph t.dalagan    
 * Date: ocotober 5 2026
 * Course: BSIT
 */

// Use let because these variables may be changed during the program.
const tuitionPerUnit = 450;
const numberOfUnits = 3;
const vatRate = 0.12;
const miscellaneousFee = 1200;

// Use let to store my personal student information.
const studentName = 'Juan Dela Cruz';
const course = "BS Information Technology";
const yearLevel = 1;

// Calculate the subtotal before adding VAT.
const baseFee = tuitionPerUnit * numberOfUnits;
const totalWithVat = baseFee + miscellaneousFee;

// Calculate the total amount including VAT.
let enrollmentCount = 0;
enrollmentCount = enrollmentCount + 1;

// Use let because the counter changes when the program runs.
let count = 0;
count = count + 1;

// Use let because the enrollment status depends on the flag.
let isEnrolled = true;
let enrollmentStatus;

if (isEnrolled == true) {
    enrollmentStatus = "ENROLLED";
} else {
    enrollmentStatus = "NOT ENROLLED";
}

console.log(studentName, course, yearLevel, enrollmentStatus);
console.log(baseFee);
console.log(totalWithVat);
console.log(enrollmentCount);

// choice: the menu option entered by the user, as a string ('0'-'3' or 'delete')
function menuAction(choice) {
  // Compare choice against each case below using strict equality (===)
  switch (choice) {
    // Runs when the user enters '1'
    case '1':
      // Option 1: add a record
      return 'Add a new record';
    // Runs when the user enters '2'
    case '2':
      // Option 2: view records
      return 'View all records';
    // '3' has no return of its own, so it falls through to the 'delete' case below
    case '3':
    // Shared behaviour, intentional: 'delete' gives the same result as '3'
    case 'delete':
      // Returned for both '3' and 'delete'
      return 'Confirm deletion';
    // Runs when the user enters '0'
    case '0':
      // Option 0: exit
      return 'Exit the program';
    // Runs when nothing above matched
    default:
      // Fallback message for invalid input
      return 'Invalid option - please choose 0 to 3';
  }
}

// Test call with '1': prints "Add a new record"
console.log(menuAction('1'));
// Test call with 'delete': prints "Confirm deletion"
console.log(menuAction('delete'));
// Test call with '9' (not a valid option): prints "Invalid option - please choose 0 to 3"
console.log(menuAction('9'));
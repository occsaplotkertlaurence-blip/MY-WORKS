/* variable
let
var
const
*/

function getInfo(name, section, grade = 1.0) {
   // return `My name is ${name} and section ${section} my grade is ${grade}`;
    return "My name is " + name + " and section " + section;
}


//calling a function
const info = getInfo('Saplot', 'BSIT 1M', 5);
const info2 = getInfo('Daniela', 'BSN', 5);
console.log(info);
console.log(info2);


// object
/**
 * {
 *  name: Wilson,
 *  section: BSIT
 * }
 * 
 * 
*/

function getDisplayObject(obj) {
    return `My name is ${obj.name} and section ${obj.section} balanace ${obj.balance}`;
}
const objValues = {
    name: "Wilson",
    section: "No Section",
    balance: 5000,
}
const display = getDisplayObject(objValues);
console.log(display)


function computeAverage(a, b, c) {
    
    if(typeof a === 'number' && typeof b === 'string' && typeof c === 'number') {
        const calculate = (a + Number(b) + c) / 3
        return "My average is: " + calculate.toFixed(2);
    }else{
        return "Parameter only accepts number";
    }
}

console.log(computeAverage(12, "7", 34));


const names = 'saPlot';
console.log("Convert to uppercase   " + names.toLowerCase())

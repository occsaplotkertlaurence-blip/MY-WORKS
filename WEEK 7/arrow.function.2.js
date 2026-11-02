const double = (x) => {
    if (typeof x !== 'number') {
        throw new TypeError(`double expects a number, got ${typeof x}`);
    }
    return x * 2;
};

const capitalize = (text) => {
    if (typeof text !== 'string') {
        throw new TypeError('capitalize expects a string');
    }
    return text.charAt(0).toUpperCase() + text.slice(1);
};

const average = (numbers) => {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new TypeError('average expects a non-empty array of numbers');
    }
    if (!numbers.every((n) => typeof n === 'number')) {
        throw new TypeError('average expects every element to be a number');
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
};

const greet = (name = 'Guest') => {
    if (typeof name !== 'string') {
        throw new TypeError('greet expects a string name');
    }
    return `Hello, ${name}!`;
};

console.log(double(5));
console.log(double(0));
console.log(capitalize("hello"));
console.log(capitalize(""));
console.log(average([1, 2, 3, 4, 5]));
console.log(average([10, 20, 30]));
console.log(greet("Alice"));
console.log(greet());

// These now throw a TypeError instead of returning misleading values:
// double("abc");
// capitalize(42);
// average([]);
// greet(123);
  // Single expression -> concise arrow body (no braces, no return)
    const double = (x) => x * 2;

    const capitalize = (text) => {
        if (typeof text !== 'string') {
            return 'Error: text must be a string';
        }
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    const average = (numbers) => {
        if (!Array.isArray(numbers) || numbers.length === 0) {
            return 'Error: provide a non-empty array of numbers';
        }
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum / numbers.length;
    };

    const greet = (name = "Guest") => {
        if (typeof name !== "string") {
            return "Invalid name";
        }
        return `Hello, ${name}!`;
    };

    console.log(double(5));
    console.log(double(0));
    console.log(double("abc"));
    console.log(capitalize("hello"));
    console.log(capitalize(""));
    console.log(capitalize(42));
    console.log(average([1, 2, 3, 4, 5]));
    console.log(average([]));
    console.log(average([10, 20, 30]));
    console.log(greet("Alice"));
    console.log(greet());
    console.log(greet(123));
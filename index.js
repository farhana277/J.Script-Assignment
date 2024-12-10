// Function 1: calculateDifference
function calculateDifference(a, b) {
    return a - b;
}
console.log("Difference:", calculateDifference(10, 5)); // Output: 5

// Function 2: isOdd
function isOdd(number) {
    return number % 2 !== 0;
}
console.log("Is Odd (5):", isOdd(5)); // Output: true
console.log("Is Odd (4):", isOdd(4)); // Output: false

// Function 3: findMin
function findMin(numbers) {
    return Math.min(...numbers);
}
console.log("Smallest number:", findMin([10, 2, 5, 1, 8])); // Output: 1

// Function 4: filterEvenNumbers
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log("Even numbers:", filterEvenNumbers([10, 3, 7, 8, 2, 5])); // Output: [10, 8, 2]

// Function 5: sortArrayDescending
function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}
console.log("Sorted in descending order:", sortArrayDescending([10, 3, 7, 8, 2, 5])); // Output: [10, 8, 7, 5, 3, 2]

// Function 6: lowercaseFirstLetter
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str[0].toLowerCase() + str.slice(1);
}
console.log("Lowercase first letter:", lowercaseFirstLetter("Hello")); // Output: hello

// Function 7: findAverage
function findAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
console.log("Average:", findAverage([10, 20, 30, 40, 50])); // Output: 30

// Function 8: isLeapYear
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Is Leap Year (2024):", isLeapYear(2024)); // Output: true
console.log("Is Leap Year (2023):", isLeapYear(2023)); // Output: false

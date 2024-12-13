const readline = require("readline");

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function 1: calculateDifference
function calculateDifference(a, b) {
  return a - b;
}

// Function 2: isOdd
function isOdd(number) {
  return number % 2 !== 0;
}

// Function 3: filterEvenNumbers
function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

// Function 4: findMin
function findMin(numbers) {
  return Math.min(...numbers);
}

// Function 5: sortArrayDescending
function sortArrayDescending(numbers) {
  return [...numbers].sort((a, b) => b - a);
}

// Function 6: lowercaseFirstLetter
function lowercaseFirstLetter(str) {
  if (str.length === 0) return str;
  return str[0].toLowerCase() + str.slice(1);
}

// Function 7: findAverage
function findAverage(numbers) {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// Function 8: isLeapYear
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// User Interaction
rl.question(
  "Enter two numbers separated by space to calculate their difference: ",
  (input) => {
    const [a, b] = input.split(" ").map(Number);
    console.log("Difference:", calculateDifference(a, b));

    rl.question("Enter a number to check if it is odd: ", (numberInput) => {
      const number = parseInt(numberInput, 10);
      console.log("Is Odd:", isOdd(number));

      rl.question(
        "Enter numbers separated by space to filter even numbers: ",
        (evenInput) => {
          const numbers = evenInput.split(" ").map(Number);
          console.log("Even numbers:", filterEvenNumbers(numbers));

          rl.question(
            "Enter numbers separated by space to find the smallest: ",
            (arrayInput) => {
              const numbers = arrayInput.split(" ").map(Number);
              console.log("Smallest number:", findMin(numbers));

              rl.question(
                "Enter numbers separated by space to sort them in descending order: ",
                (sortInput) => {
                  const numbers = sortInput.split(" ").map(Number);
                  console.log(
                    "Sorted in descending order:",
                    sortArrayDescending(numbers)
                  );

                  rl.question(
                    "Enter a string to lowercase its first letter: ",
                    (stringInput) => {
                      console.log(
                        "Lowercase first letter:",
                        lowercaseFirstLetter(stringInput)
                      );

                      rl.question(
                        "Enter numbers separated by space to calculate the average: ",
                        (avgInput) => {
                          const numbers = avgInput.split(" ").map(Number);
                          console.log("Average:", findAverage(numbers));

                          rl.question(
                            "Enter a year to check if it's a leap year: ",
                            (yearInput) => {
                              const year = parseInt(yearInput, 10);
                              console.log("Is Leap Year:", isLeapYear(year));

                              rl.close(); // Close the interface
                            }
                          );
                        }
                      );
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  }
);

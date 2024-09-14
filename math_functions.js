// (1) Factorial
// function to calculate the factorial of a given number.

function factorial(n) {
  let result = 1; // start with , since 0 x num = 0

  for (let i = 2; i <= n; i++) {
    result *= i; // multiply the result by the current number
  }

  return result;
}

console.log(factorial(5));

// (2) Prime Number Check
// function to check if a number is prime or not
function checkPrimeNumber(num) {
  // if number is negative or 1
  if (num <= 1) return false;
  // if number is 2 or 3
  if (num === 2 || num === 3) return true;
  // Eliminate the even numbers
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    // increment by 2 to skip the even numbers
    if (num % i === 0) return false;
  }

  return true;
}
console.log(checkPrimeNumber(15));

// (3) Fibonacci Sequence
// function to generate the Fibonacci sequence up to a given number of terms.

function fibonacci(terms) {
  // Initialize an empty array to store the fibonacci sequence
  let sequence = [];

  // Handle the base cases for small numbers
  if (terms <= 0) return sequence; // return an empty array if number is 0 downwards
  if (terms >= 1) sequence.push(0); // Push the first Fibonacci number (0)
  if (terms >= 2) sequence.push(1); // Push the second Fibonacci number (1)

  // Loop through and calculate the rest of the sequence
  for (let i = 2; i < terms; i++) {
    // Calculate the next Fibonacci number
    let nextNumber = sequence[i - 1] + sequence[i - 2];
    // Add the next number to the sequence array
    sequence.push(nextNumber);
  }

  return sequence;
}

console.log(fibonacci(5));

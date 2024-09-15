// Function to convert string s to its corresponding position in the alphabet and concatenate the results
const convertStringToPosition = (s) => {
  let transformedString = "";
  for (let i = 0; i < s.length; i++) {
    const position = s.charCodeAt(i) - 96;
    transformedString += position;
  }
  return transformedString;
};

// Function to calculate the sum of the digits in the given value
const getTotal = (value) => {
  let total = 0;
  for (let i = 0; i < value.length; i++) {
    total += Number.parseInt(value[i]);
  }
  return total;
};

// Function to repeatedly transform the sum based on the value of k
const getSum = (value, k) => {
  let sum = value;

  // Repeat the transformation k times
  for (let i = 0; i < k; i++) {
    sum = getTotal(sum.toString());
  }

  return sum;
};

// Main function to execute the operations
function getLucky(s, k) {
  // Step 1: Convert the string to its corresponding position value
  const getPosition = convertStringToPosition(s);

  // Step 2: Calculate the initial sum of the digits
  let total = getTotal(getPosition);

  // Step 3: If k > 1, perform additional transformations
  if (k > 1) {
    total = getSum(total, k - 1);
  }

  // Output the final result
  return total;
}

// Example usage
const result = getLucky("leetcode", 2);
console.log(result); // Output should be 36

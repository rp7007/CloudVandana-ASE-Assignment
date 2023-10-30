const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by spaces: ", (input) => {
  const numbers = input.split(" ").map(Number); // Convert input to an array of numbers
  const sortedArray = bubbleSortDescending(numbers);
  console.log("Sorted array in descending order: " + sortedArray.join(" "));
  rl.close();
});

function bubbleSortDescending(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // Swap if the current element is less than the next element
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

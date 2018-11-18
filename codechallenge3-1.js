// Challenge 1. Add all numbers. return sum of all parameters entered regardless of the amount of numbers NO arrays.

function addAll(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}

const output = addAll(8, 4, 7, 5);

console.log(output);

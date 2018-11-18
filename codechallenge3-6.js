// Challenge 6: Even and odd sums. Take in an array and return an array of the sums of even and odd numbers.

function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));
  return [evenSum, oddSum];
}
const output = evenOddSums([42, 37, 91, 18, 20, 10, 6, 9]);
console.log(output);

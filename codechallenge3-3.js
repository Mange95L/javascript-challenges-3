// Challenge 3: Seek and destroy. remove from the array whatever is in the following arguments. return the leftover numbers in an array.

function seekAndDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

const output = seekAndDestroy(
  [1, 2, 3, 4, 8, 8, "test", "lalala", 2],
  2,
  6,
  "test"
);
console.log(output);

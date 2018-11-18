// Challenge 2: sum all primes. pass in a number to loop up to and add all of the prime numbers.

function sumAllPrimes(num) {
  let total = 0;

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }
  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}
const output = sumAllPrimes(1000);
console.log(output);

// Challenge 5: Missing letters. find the missing letter in the passed letter range and return it. if all letters are present, return undefined.

function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split("").map((char, i) => {
    if (str.charCodeAt(i) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });
  return missing;
}

const output = missingLetters("abce");
console.log(output);

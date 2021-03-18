// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const standardAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function findDuplicates(alphabet) {
    let string = alphabet.split("");
    return string.filter((item, index, self) => self.indexOf(item) !== index);
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26) return false;

    if (findDuplicates(alphabet).length > 0) return false;

    alphabet = alphabet.toLowerCase().split("");
    input = input.toLowerCase().split("");

    let result = "";

    input.forEach((letter) => {
      if (letter === " ") return (result += letter);
      if (encode) {
        let foundIndex = standardAlphabet.indexOf(letter);
        result += alphabet[foundIndex];
      } else {
        let foundIndex = alphabet.indexOf(letter);
        result += standardAlphabet[foundIndex];
      }
    });

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;

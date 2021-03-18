// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift === undefined || shift < -25 || shift > 25) {
      return false;
    }

    input = input.toLowerCase();

    let result = "";

    for (let i = 0; i < input.length; i++) {
      let letter = input[i];

      if (letter === " " || !alphabet.includes(letter)) {
        result += letter;
        continue;
      }

      let index = alphabet.indexOf(letter);
      let newIndex = 0;

      if (!encode) {
        newIndex = index - shift;
      } else {
        newIndex = index + shift;
      }

      if (newIndex > 25) newIndex -= 26;
      if (newIndex < 0) newIndex += 26;

      result += alphabet[newIndex];
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;

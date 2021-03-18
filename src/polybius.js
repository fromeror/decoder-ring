// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const grid = [
    { letter: "a", code: "11" },
    { letter: "b", code: "21" },
    { letter: "c", code: "31" },
    { letter: "d", code: "41" },
    { letter: "e", code: "51" },
    { letter: "f", code: "12" },
    { letter: "g", code: "22" },
    { letter: "h", code: "32" },
    { letter: "i", code: "42" },
    { letter: "j", code: "42" },
    { letter: "k", code: "52" },
    { letter: "l", code: "13" },
    { letter: "m", code: "23" },
    { letter: "n", code: "33" },
    { letter: "o", code: "43" },
    { letter: "p", code: "53" },
    { letter: "q", code: "14" },
    { letter: "r", code: "24" },
    { letter: "s", code: "34" },
    { letter: "t", code: "44" },
    { letter: "u", code: "54" },
    { letter: "v", code: "15" },
    { letter: "w", code: "25" },
    { letter: "x", code: "35" },
    { letter: "y", code: "45" },
    { letter: "z", code: "55" },
  ];

  function polybius(input, encode = true) {
    if (!encode && input.replace(/\s/g, "").length % 2 !== 0) {
      return false;
    }

    input = input.toLowerCase();

    if (encode) {
      return encodeInput(input);
    } else {
      return decodeInput(input);
    }
  }

  function encodeInput(input) {
    let result = "";
    for (let i = 0; i < input.length; i++) {
      const index = input.charCodeAt(i);
      if (index > 96 && index < 123) {
        result += grid.find((item) => item.letter === input[i]).code;
      } else {
        result += input[i];
      }
    }
    return result;
  }

  function decodeInput(input) {
    let result = "";

    let message = input.split(" ");

    message.forEach((x) => {
      let pairs = x.match(/\d{2}/g);

      pairs.forEach((x) => {
        if (x === "42") {
          result += "(i/j)";
        } else {
          const letter = grid.find((item) => item.code === x).letter;
          if (letter.length) {
            result += letter;
          }
        }
      });

      result += " ";
    });

    return result.trim();
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;

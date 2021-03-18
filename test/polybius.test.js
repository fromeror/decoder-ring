const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  describe("encoding a message", () => {
    it("Should return encoded word", () => {
      const actual = polybius("thinkful");
      expect(actual).to.equal("4432423352125413");
    });

    it("Should return encoded word with maintained spaces", () => {
      const actual = polybius("Hello World");
      expect(actual).to.equal("3251131343 2543241341");
    });

    it("Should return encoded word with (i/j)", () => {
      const actual = polybius("4432423352125413", false);
      expect(actual).to.equal("th(i/j)nkful");
    });
  });

  describe("decoding a message", () => {
    it("Should return decoded word with maintained spaces", () => {
      const actual = polybius("3251131343 2543241341", false);
      expect(actual).to.equal("hello world");
    });
  });

  describe("error handling", () => {
    it("Should return false for decoded word if odd", () => {
      const actual = polybius("44324233521254134", false);
      expect(actual).to.equal(false);
    });
  });
});

const caeser = require("../src/caesar");
const expect = require("chai").expect;

describe("caeser", () => {
  describe("error handling", () => {
    it("Should return false if no shift value is given", () => {
      const actual = caeser("thinkful");
      expect(actual).to.equal(false);
    });

    it("Should return false if shift value is 0", () => {
      const actual = caeser("thinful", 0);
      expect(actual).to.equal(false);
    });

    it("Should return false if value is less than -25", () => {
      const actual = caeser("thinkful", -26);
      expect(actual).to.equal(false);
    });

    it("Should return false if value is greater than 25", () => {
      const actual = caeser("thinkful", 99);
      expect(actual).to.equal(false);
    });
  });

  describe("encoding a message", () => {
    it("Should return encoded word with right shift", () => {
      const actual = caeser("thinkful", 3);
      expect(actual).to.equal("wklqnixo");
    });

    it("Should return encoded word with left shift", () => {
      const actual = caeser("thinkful", -3);
      expect(actual).to.equal("qefkhcri");
    });

    it("Should return encoded word with maintained spaces and symbols", () => {
      const actual = caeser("This is a secret message!", 8);
      expect(actual).to.equal("bpqa qa i amkzmb umaaiom!");
    });
  });

  describe("decoding a message", () => {
    it("Should return decoded word with right shift", () => {
      const actual = caeser("wklqnixo", 3, false);
      expect(actual).to.equal("thinkful");
    });

    it("Should return decoded word with maintained spaces and symbols", () => {
      const actual = caeser("BPQA qa I amkzmb umaaiom!", 8, false);
      expect(actual).to.equal("this is a secret message!");
    });
  });
});

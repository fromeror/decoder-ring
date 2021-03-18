const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
  describe("error handling", () => {
    it("Should return false if no alphabet is give", () => {
      const actual = substitution("thinkful");
      expect(actual).to.equal(false);
    });

    it("Should return false if alphabet is not of length 26", () => {
      const actual = substitution("thinkful", "short");
      expect(actual).to.equal(false);
    });

    it("Should return false if alphabet has duplicates", () => {
      const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
      expect(actual).to.equal(false);
    });
  });

  describe("encoding a message", () => {
    it("Should return encoded message with given alphabet", () => {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      expect(actual).to.equal("jrufscpw");
    });

    it("Should return encoded message with maintained spaces and ignore capital letters", () => {
      const actual = substitution(
        "You are an excellent spy",
        "xoyqmcgrukswaflnthdjpzibev"
      );
      expect(actual).to.equal("elp xhm xf mbymwwmfj dne");
    });

    it("Should return encoded message with symbols in alphabet", () => {
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      expect(actual).to.equal("y&ii$r&");
    });
  });

  describe("decoding a message", () => {
    it("Should return decoded message with given alphabet", () => {
      const actual = substitution(
        "jrufscpw",
        "xoyqmcgrukswaflnthdjpzibev",
        false
      );
      expect(actual).to.be.equal("thinkful");
    });

    it("Should return decoded message with maintained spaces and ignore capital letters", () => {
      const actual = substitution(
        "elp xhm xf mbymwwmfj dne",
        "xoyqmcgrukswaflnthdjpzibev",
        false
      );
      expect(actual).to.equal("you are an excellent spy");
    });

    it("Should return decoded message with symbols in alphabet", () => {
      const actual = substitution(
        "y&ii$r&",
        "$wae&zrdxtfcygvuhbijnokmpl",
        false
      );
      expect(actual).to.equal("message");
    });
  });
});

const cryptoHash = require("./crypto-hash");

describe("cryptoHash()", () => {
  it("Should return the same hash for a given input", () => {
    expect(cryptoHash("one", "two", "three")).toEqual(
      cryptoHash("three", "two", "one")
    );
  });
});

const assert = require("assert");

const { add } = require("../src/app");

describe("Add the numbers", () => {
  it("should return the sum of two numbers", () => {
    const result = add(1, 2);
    assert.equal(result, 3);
  });
});

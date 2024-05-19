// test/promise.test.js

import("chai").then((chai) => {
  const expect = chai.expect;

  const fetchData = require("../promise");

  describe("Asynchronous Test with Promise", function () {
    it("should fetch data correctly", function () {
      return fetchData().then((data) => {
        expect(data).to.equal("data");
      });
    });
  });
});

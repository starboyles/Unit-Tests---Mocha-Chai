// test/asyncawait.test.js
import("chai").then((chai) => {
  const expect = chai.expect;

  const fetchData = require("../asyncawait");

  describe("Asynchronous Test with Async/Await", function () {
    it("should fetch data correctly", async function () {
      const data = await fetchData();
      expect(data).to.equal("data"); 
    });
  });
});

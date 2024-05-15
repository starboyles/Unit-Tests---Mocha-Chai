import('chai').then(chai => {
    const expect = chai.expect;

    // Your test code goes here
    const Hexahedron = require("../src/hexahedron.js").Hexahedron;

    describe("Testing the Hexahedron Functions", function () {
      it("1. The side length of the Hexahedron", function () {
        let r1 = new Hexahedron(2);
        expect(r1.getSideLength()).to.equal(2);
      });

      it("2. The surface area of the Hexahedron", function () {
        let r2 = new Hexahedron(5);
        expect(r2.getSurfaceArea()).to.equal(150);
      });

      it("3. The volume of the Hexahedron", function () {
        let r3 = new Hexahedron(7);
        expect(r3.getVolume()).to.equal(343);
      });
    });
}).catch(error => {
    console.error('Error importing Chai:', error);
});

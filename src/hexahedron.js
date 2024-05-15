const Hexahedron = require("../src").Hexahedron;
const expect = require("chai").expect;

describe("Testing the Hexahedron Functions", function () {
  it("1. The side length of the Hexahedron", function (done) {
    let h1 = new Hexahedron(2);
    expect(h1.getSideLength()).to.equal(2);
    done();
  });

  it("2. The surface area of the Hexahedron", function (done) {
    let h2 = new Hexahedron(5);
    expect(h2.getSurfaceArea()).to.equal(150);
    done();
  });

  it("3. The volume of the Cube", function (done) {
    let h3 = new Hexahedron(7);
    expect(h3.getVolume()).to.equal(343);
    done();
  });
});

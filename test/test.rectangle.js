const expect = require('chai').expect;
const Rectangle = require('../test/test.rectangle'); // Assuming your Rectangle class is in the "rectangle" file

describe('Rectangle Class', () => {
  it('should create a rectangle with given width and height', () => {
    const rect = new Rectangle(5, 3);
    const { width, height } = rect.getSideLengths();
    expect(width).to.equal(5);
    expect(height).to.equal(3);
  });

  it('should calculate the perimeter correctly', () => {
    const rect = new Rectangle(4, 2);
    expect(rect.getPerimeter()).to.equal(12);
  });

  it('should calculate the area correctly', () => {
    const rect = new Rectangle(7, 6);
    expect(rect.getArea()).to.equal(42);
  });

  it('should throw error for non-positive width or height', () => {
    expect(() => new Rectangle(0, 3)).to.throw('Width and height must be positive numbers');
    expect(() => new Rectangle(-2, 5)).to.throw('Width and height must be positive numbers');
  });
});


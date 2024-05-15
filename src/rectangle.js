class Rectangle {
    constructor(width, height) {
      if (width <= 0 || height <= 0) {
        throw new Error('Width and height must be positive numbers');
      }
      this.width = width;
      this.height = height;
    }
  
    getSideLengths() {
      return { width: this.width, height: this.height };
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  module.exports = Rectangle;
  
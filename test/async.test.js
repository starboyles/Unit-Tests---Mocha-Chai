// Use dynamic import to load chai
import('chai').then(chai => {
    const expect = chai.expect;
  
    // Assuming fetchData is a function that fetches data asynchronously using a callback
    const fetchData = require('../async');
  
    describe('Asynchronous Test with Callback', function() {
      it('should fetch data correctly', function(done) {
        fetchData((data) => {
          expect(data).to.equal('data');
          done();  // Indicates that the test is complete
        });
      });
    });
  }).catch(error => {
    console.error('Error importing Chai:', error);
  });
  
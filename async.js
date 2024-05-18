// async.js
function fetchData(callback) {
    setTimeout(() => {
      callback('data');
    }, 1000);
  }
  
  module.exports = fetchData;
  
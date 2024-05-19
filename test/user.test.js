// test/user.test.js
import('chai').then(chai => {
    const expect = chai.expect;

const UserManager = require('../user');

describe('UserManager', function() {
  let userManager;

  // Runs once before all tests in the suite
  before(function() {
    userManager = new UserManager();
  });

  // Runs before each test in the suite
  beforeEach(function() {
    userManager.clearUsers();
  });

  // Runs after each test in the suite
  afterEach(function() {
    // You can perform additional cleanup here if needed
  });

  // Runs once after all tests in the suite
  after(function() {
    userManager = null;
  });

  it('should add a user', function() {
    userManager.addUser({ id: 1, name: 'John Doe' });
    const user = userManager.getUser(1);
    expect(user).to.deep.equal({ id: 1, name: 'John Doe' });
  });

  it('should get a user by id', function() {
    userManager.addUser({ id: 2, name: 'Jane Doe' });
    const user = userManager.getUser(2);
    expect(user).to.deep.equal({ id: 2, name: 'Jane Doe' });
  });
});
});

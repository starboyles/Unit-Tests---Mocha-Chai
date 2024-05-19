// user.js
class UserManager {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  getUser(id) {
    return this.users.find((user) => user.id === id);
  }

  clearUsers() {
    this.users = [];
  }
}

module.exports = UserManager;

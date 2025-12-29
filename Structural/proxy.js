class UserServiceProxy {
  constructor() {
    this.service = new UserService();
    this.cache = {};
  }

  getUser(id) {
    if (this.cache[id]) {
      console.log("Returning cached user");
      return this.cache[id];
    }

    const user = this.service.getUser(id);
    this.cache[id] = user;
    return user;
  }
}

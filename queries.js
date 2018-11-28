const database = require("./database-connection");

module.exports = {
  listAll() {
    return database("old_students");
  },
  getById(id) {
    return database("old_students").where("id", id);
  }
};

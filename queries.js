const database = require("./database-connection");

module.exports = {
  listAll() {
    return database("old_students");
  }
};

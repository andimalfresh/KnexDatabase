const database = require("./database-connection");

module.exports = {
  listAll() {
    return database("old_students");
  },
  getById(id) {
    return database("old_students").where("id", id);
  },
  createStudent(pushStudent) {
    return database("old_students")
      .insert(pushStudent)
      .returning("*");
  },
  deleteStudent(id) {
    return database("old_students")
      .where("id", id)
      .delete();
  },
  updateStudent(id, student) {
    return database("old_students")
      .where("id", id)
      .update(student)
      .returning("*");
  }
};

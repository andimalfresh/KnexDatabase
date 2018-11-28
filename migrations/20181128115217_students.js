exports.up = function(knex, Promise) {
  return knex.schema.createTable("old_students", student => {
    student.increments("id"),
      student.string("name"),
      student.string("fave_animal"),
      student.string("previous_occupation"),
      student.float("hometown_lat", 8, 8),
      student.float("hometown_long", 8, 8),
      student.string("useless_superpower");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("old_students");
};

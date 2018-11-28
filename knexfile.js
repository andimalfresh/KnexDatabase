// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://localhost/g102"
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  },
  migrations: {
    tableName: "knex_migrations"
  }
};

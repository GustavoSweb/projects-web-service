const { HOST_NAME, HOST_PORT, HOST_USER, HOST_PASSWORD, HOST_DATABASE } =
  process.env;

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: HOST_NAME,
    port: HOST_PORT,
    user: HOST_USER,
    password: HOST_PASSWORD,
    database: HOST_DATABASE,
  },
});
module.exports = knex;

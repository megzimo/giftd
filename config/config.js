/* eslint-disable camelcase */
require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "giftd_db",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "testdb",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};

require("dotenv").config();

const { DB_NAME, DB_PORT, DB_HOST, DB_USER, DB_PASS } = process.env;

module.exports = {
  database: {
    name: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASS,
  },
};

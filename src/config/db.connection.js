const { Sequelize, DataTypes } = require("sequelize");

const db = require("./conf");

const sequelize = new Sequelize(
  db.database.name,
  db.database.username,
  db.database.password,
  {
    host: db.database.host,
    dialect: db.database.dialect,
    dialect: "mysql",
    logging: false,
    port: db.database.port,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

exports.connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Db Connected");
  } catch (error) {
    console.log("db connection failed: " + error);
  }
  return sequelize;
};

// create table

exports.user = require("../models/user.model")(sequelize, DataTypes, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("all models are synchronized with db");
});
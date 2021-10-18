const Sequelize = require("sequelize");
const db = require("../database");

const Candies = db.define("candies", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10,
    },
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
});

module.exports = Candies;

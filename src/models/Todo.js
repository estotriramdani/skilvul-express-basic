const { DataTypes } = require('sequelize');
const sequelize = require('.');

const TodoModel = sequelize.define('todos', {
  todo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = TodoModel;

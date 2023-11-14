const { DataTypes } = require('sequelize');
const sequelize = require('.');

const TodoModel = sequelize.define('todos', {
  todo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  attachment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = TodoModel;

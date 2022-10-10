"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.petugas, {
        foreignKey: "role",
        as: "roles",
      });
    }
  }
  role.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "role",
      tableName: 'role'
    }
  );
  return role;
};

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.pembayaran, {
        foreignKey: "id_siswa",
        as: "pembayaran",
      });
      this.belongsTo(models.kelas, {
        foreignKey: "id_kelas",
        as: "kelas",
      });
    }
  }
  siswa.init(
    {
      id_siswa: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nis: DataTypes.CHAR,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      id_kelas: DataTypes.STRING,
      alamat: DataTypes.TEXT,
      no_telp: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "siswa",
      tableName: "siswa",
    }
  );
  return siswa;
};

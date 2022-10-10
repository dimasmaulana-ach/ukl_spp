'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.siswa,{
        foreignKey: 'kelas_siswa',
        as:'siswa'
      })
    }
  }
  kelas.init({
    id_kelas: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nama_kelas: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    angkatan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kelas',
    tableName: 'kelas'
  });
  return kelas;
};
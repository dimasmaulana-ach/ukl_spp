'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('siswa', {
      id_siswa: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nis: {
        type: Sequelize.CHAR
      },
      name: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      id_kelas: {
        type: Sequelize.INTEGER,
        references: {
          model: 'kelas',
          key: 'id_kelas'
        }
      },
      alamat: {
        type: Sequelize.TEXT
      },
      no_telp: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('siswa');
  }
};
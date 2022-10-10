'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pembayaran', {
      id_pembayaran: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_petugas: {
        type: Sequelize.INTEGER,
        references:{
          model:'petugas',
          key: 'id_petugas'
        }
      },
      id_siswa: {
        type: Sequelize.INTEGER,
        references:{
          model:'siswa',
          key: 'id_siswa'
        }
      },
      tgl_bayar: {
        type: Sequelize.DATE
      },
      bulan_spp: {
        type: Sequelize.INTEGER
      },
      tahun_spp: {
        type: Sequelize.INTEGER
      },
      nominal: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('pembayaran');
  }
};
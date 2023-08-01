'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tamu', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama: {
          type: Sequelize.DataTypes.STRING,
      },
      tanggal: {
          type: Sequelize.DataTypes.DATE,
      },
      jam: {
          type: Sequelize.DataTypes.TIME,
      },
      instansi: {
          type: Sequelize.DataTypes.STRING,
      },
      keperluan: {
          type: Sequelize.DataTypes.TEXT,
      },
      id_satker: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
              model: {
                  tableName: 'satker'
              },
              key: 'id'
          }
      },
      no_hp: {
          type: Sequelize.DataTypes.STRING,
      }
    }, {
      timestamps: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tamu');
  }
};

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('satker', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nama_satker: {
          type: Sequelize.DataTypes.STRING,
      }
    }, {
      timestamps: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('satker');
  }
};

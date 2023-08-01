module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('admin', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
          type: Sequelize.DataTypes.STRING,
      },
      username: {
          type: Sequelize.DataTypes.STRING,
      },
      password: {
          type: Sequelize.DataTypes.STRING
      }
    }, {
      timestamps: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('admin');
  }
};

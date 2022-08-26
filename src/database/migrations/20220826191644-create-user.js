'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users',
      {
        id: {
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        displayName: {
          allowNull: false,
          type: Sequelize.String
        },
        email: {
          allowNull: false,
          type: Sequelize.String
        },
        password: {
          allowNull: false,
          type: Sequelize.String
        },
        image: {
          allowNull: false,
          type: Sequelize.String
        }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users')
  }
};

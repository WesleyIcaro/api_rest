'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      // eslint-disable-next-line camelcase
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      // eslint-disable-next-line camelcase
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      // eslint-disable-next-line camelcase
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    }
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  }
};

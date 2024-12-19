'use strict';

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // eslint-disable-next-line camelcase
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true
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
    await queryInterface.dropTable('fotos');
  }
};


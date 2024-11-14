'use strict';

// eslint-disable-next-line no-undef
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
// eslint-disable-next-line no-undef
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users', [
        {
          nome: 'John Doe',
          email: 'john@gmail.com',
          // eslint-disable-next-line camelcase
          password_hash: await bcryptjs.hash('123456', 8),
          // eslint-disable-next-line camelcase
          created_at: new Date(),
          // eslint-disable-next-line camelcase
          updated_at: new Date(),
        },
        {
          nome: 'Juan',
          email: 'Juan@gmail.com',
          // eslint-disable-next-line camelcase
          password_hash: await bcryptjs.hash('123456', 8),
          // eslint-disable-next-line camelcase
          created_at: new Date(),
          // eslint-disable-next-line camelcase
          updated_at: new Date(),
        },
        {
          nome: 'Raul',
          email: 'raul@gmail.com',
          // eslint-disable-next-line camelcase
          password_hash: await bcryptjs.hash('123456', 8),
          // eslint-disable-next-line camelcase
          created_at: new Date(),
          // eslint-disable-next-line camelcase
          updated_at: new Date(),
        }
      ],
      {}
    );

  },

  // eslint-disable-next-line no-empty-function
  async down() { }
};

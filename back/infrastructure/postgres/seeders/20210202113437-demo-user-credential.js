'use strict';
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = '12345';
    const salt = bcrypt.genSaltSync();
    const passwordHash = bcrypt.hashSync(password, salt);

    const records = [
      {
        id: uuidv4(),
        userId: '450a3d3f-3f9b-4280-a409-fa3f6f2b5927',
        password: passwordHash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert(`UserCredentials`, records, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(`UserCredentials`, null, {});
  },
};

'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const records = [
      {
        id: uuidv4(),
        userId: '450a3d3f-3f9b-4280-a409-fa3f6f2b5927',
        token: uuidv4(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert(`UserActivationTokens`, records, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(`UserActivationTokens`, null, {});
  },
};

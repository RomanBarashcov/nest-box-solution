'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const records = [
      {
        id: uuidv4(),
        userId: '450a3d3f-3f9b-4280-a409-fa3f6f2b5927',
        firstName: 'firstName1',
        lastName: 'lastName1',
        mobilePhone: '+380991234567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert(`UserProfiles`, records, {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(`UserProfiles`, null, {});
  },
};

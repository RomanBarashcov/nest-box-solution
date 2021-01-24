'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert(
      `Users`,
      [
        {
          id: uuidv4(),
          firstName: 'firstName',
          lastName: 'lastName',
          email: 'user1@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    ),

  down: async (queryInterface, Sequelize) =>
    await queryInterface.bulkDelete(`Users`, null, {}),
};

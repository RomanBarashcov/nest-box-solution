'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) =>
    await queryInterface.bulkInsert(
      `Users`,
      [
        {
          id: '450a3d3f-3f9b-4280-a409-fa3f6f2b5927',
          email: 'user1@gmail.com',
          isActive: true,
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    ),

  down: async (queryInterface, Sequelize) =>
    await queryInterface.bulkDelete(`Users`, null, {}),
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UserData', [
      {
        firstName: 'userData1',
        lastName: 'user',
        email: 'user@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'user4',
        lastName: 'user2',
        email: 'user3@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UserData', null, {});
  }
};



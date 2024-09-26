'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Insert data into Users table
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
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    // Delete all data from Users table
    return queryInterface.bulkDelete('UserData', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};



'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Geographies', [ 
    {
      name: 'ภาคเหนือ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'ภาคกลาง-ตะวันตก',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'ภาคตะวันออกเฉียงเหนือ',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'ภาคใต้',
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Geographies', null, {});
  }
};

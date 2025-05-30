'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Dams', [
        {
        name: 'เขื่อนภูมิพล',
        code: 'N1',
        capacity_amount: 15000,
        lower_threshold: 50,
        upper_threshold: 12000,
        geography_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'เขื่อนสิริกิติ์',
         code: 'N2',
        capacity_amount: 10000,
        lower_threshold: 50,
        upper_threshold: 9000,
        geography_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'เขื่อนแม่งัด ',
        code: 'N3',
        capacity_amount: 7000,
        lower_threshold: 45,
        upper_threshold: 5000,
        geography_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'เขื่อนอุบลรัตน์ ',
        code: 'E1',
        capacity_amount: 9000,
        lower_threshold: 35,
        upper_threshold: 8000,
        geography_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'เขื่อนสิรินธร',
        code: 'E2',
        capacity_amount: 7000,
        lower_threshold: 45,
        upper_threshold: 5000,
        geography_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'เขื่อนศรีนครินทร์',
        code: 'C1',
        capacity_amount: 15000,
        lower_threshold: 450,
        upper_threshold: 13000,
        geography_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'เขื่อนรัชชประภา',
        code: 'S1',
        capacity_amount: 9000,
        lower_threshold: 470,
        upper_threshold: 8000,
        geography_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Dams', null, {});
  }
};

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DamsVolumes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dam_code: {
        type: Sequelize.STRING
      },
      monitor_date: {
        type: Sequelize.DATE
      },
      measure_level: {
        type: Sequelize.DECIMAL
      },
      volume_amount: {
        type: Sequelize.DECIMAL
      },
      utilize_amount: {
        type: Sequelize.DECIMAL
      },
      capacity_remain: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DamsVolumes');
  }
};
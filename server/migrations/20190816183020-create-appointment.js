'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      scheduled_to: {
        type: Sequelize.DATE
      },
      intended_end_time: {
        type: Sequelize.DATE
      },
      real_end_time: {
        type: Sequelize.DATE
      },
      finished: {
        type: Sequelize.BOOLEAN
      },
      canceled: {
        type: Sequelize.BOOLEAN
      },
      doctor_id: {
        type: Sequelize.INTEGER
      },
      pacient_id: {
        type: Sequelize.INTEGER
      },
      prontuario_id: {
        type: Sequelize.INTEGER
      },
      appointment_type_id: {
        type: Sequelize.INTEGER
      },
      diagnostic_hypotesis: {
        type: Sequelize.TEXT
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Appointments');
  }
};
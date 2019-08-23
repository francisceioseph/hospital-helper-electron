'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ExamAppointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      scheduled_to: {
        type: Sequelize.DATE
      },
      finished: {
        type: Sequelize.BOOLEAN
      },
      canceled: {
        type: Sequelize.BOOLEAN
      },
      exam_type_id: {
        type: Sequelize.INTEGER
      },
      prontuario_id: {
        type: Sequelize.INTEGER
      },
      doctor_id: {
        type: Sequelize.INTEGER
      },
      pacient_id: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('ExamAppointments');
  }
};
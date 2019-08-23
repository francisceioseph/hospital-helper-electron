'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Demographics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      job_title: {
        type: Sequelize.STRING
      },
      job_category: {
        type: Sequelize.STRING
      },
      is_estudying: {
        type: Sequelize.BOOLEAN
      },
      degree: {
        type: Sequelize.STRING
      },
      sexual_orientation: {
        type: Sequelize.STRING
      },
      gender_identity: {
        type: Sequelize.STRING
      },
      has_special_needs: {
        type: Sequelize.BOOLEAN
      },
      special_needs: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Demographics');
  }
};
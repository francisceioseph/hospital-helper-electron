'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PersonalData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING
      },
      social_name: {
        type: Sequelize.STRING
      },
      rg: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      nis: {
        type: Sequelize.STRING
      },
      nationality: {
        type: Sequelize.STRING
      },
      skin_color: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      profile_id: {
        type: Sequelize.INTEGER
      },
      crm: {
        type: Sequelize.STRING
      },
      cns: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('PersonalData');
  }
};
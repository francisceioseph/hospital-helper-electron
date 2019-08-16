'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BirthData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      country_of_birth: {
        type: Sequelize.STRING
      },
      state_of_birth: {
        type: Sequelize.STRING
      },
      city_of_birth: {
        type: Sequelize.STRING
      },
      personal_datum_id: {
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
    return queryInterface.dropTable('BirthData');
  }
};
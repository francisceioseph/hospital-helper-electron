

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Transfers', {
    id: {
      allowNull     : false,
      autoIncrement : true,
      primaryKey    : true,
      type          : Sequelize.INTEGER
    },
    solicitation_date: {
      type: Sequelize.DATE
    },
    finished_date: {
      type: Sequelize.DATE
    },
    diagnosis: {
      type: Sequelize.TEXT
    },
    createdAt: {
      allowNull : false,
      type      : Sequelize.DATE
    },
    updatedAt: {
      allowNull : false,
      type      : Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Transfers')
};

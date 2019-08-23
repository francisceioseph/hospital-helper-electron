

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Addresses', {
    id: {
      allowNull     : false,
      autoIncrement : true,
      primaryKey    : true,
      type          : Sequelize.INTEGER
    },
    street_name: {
      type: Sequelize.STRING
    },
    house_number: {
      type: Sequelize.STRING
    },
    zipcode: {
      type: Sequelize.STRING
    },
    neighborhood: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Addresses')
};

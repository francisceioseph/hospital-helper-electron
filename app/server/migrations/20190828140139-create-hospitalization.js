module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Hospitalizations', {
    id: {
      allowNull     : false,
      autoIncrement : true,
      primaryKey    : true,
      type          : Sequelize.INTEGER
    },
    admission_date: {
      type: Sequelize.DATE
    },
    release_date: {
      type: Sequelize.DATE
    },
    diagnosis: {
      type: Sequelize.TEXT
    },
    intended_release_date: {
      type: Sequelize.DATE
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Hospitalizations')
};



module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('DoctorSpecialties', {
    id: {
      allowNull     : false,
      autoIncrement : true,
      primaryKey    : true,
      type          : Sequelize.INTEGER
    },
    doctor_id: {
      type: Sequelize.INTEGER
    },
    specialty_id: {
      type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('DoctorSpecialties')
};

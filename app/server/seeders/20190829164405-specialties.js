

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Specialties',
    [
      {
        id             : 1,
        specialty_name : 'Clinica Cirúrgica',
        created_at     : (new Date()).toISOString(),
        updated_at     : (new Date()).toISOString()
      },
      {
        id             : 2,
        specialty_name : 'Clinica Médica',
        created_at     : (new Date()).toISOString(),
        updated_at     : (new Date()).toISOString()
      },
      {
        id             : 3,
        specialty_name : 'Clinica Obstétrica',
        created_at     : (new Date()).toISOString(),
        updated_at     : (new Date()).toISOString()
      },
      {
        id             : 4,
        specialty_name : 'Estabilização',
        created_at     : (new Date()).toISOString(),
        updated_at     : (new Date()).toISOString()
      },
      {
        id             : 5,
        specialty_name : 'Emergência',
        created_at     : (new Date()).toISOString(),
        updated_at     : (new Date()).toISOString()
      },
    ]
  ),

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Specialties', {
      where: {
        id: [1, 2, 3, 4, 5]
      }
    }, {});
  }
};

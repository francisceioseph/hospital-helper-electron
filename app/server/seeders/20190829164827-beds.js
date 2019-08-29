

module.exports = {
  up: (queryInterface, Sequelize) => {
    const surgeryBeds = Array.from({ length: 8 }, (v, k) => ({
      id           : k + 1,
      name         : `Leito ${k + 1}`,
      specialty_id : 1,
      created_at   : (new Date()).toISOString(),
      updated_at   : (new Date()).toISOString()
    }));

    const physicianBeds = Array.from({ length: 16 }, (v, k) => ({
      id           : k + 9,
      name         : `Leito ${k + 9}`,
      specialty_id : 2,
      created_at   : (new Date()).toISOString(),
      updated_at   : (new Date()).toISOString()
    }));

    const mothersBeds = Array.from({ length: 4 }, (v, k) => ({
      id           : k + 25,
      name         : `Pré-Parto ${k + 1}`,
      specialty_id : 3,
      created_at   : (new Date()).toISOString(),
      updated_at   : (new Date()).toISOString()
    }));

    return queryInterface.bulkInsert('Beds', [
      ...surgeryBeds,
      ...physicianBeds,
      ...mothersBeds,
      {
        id           : 30,
        name         : 'Estabilização',
        specialty_id : 4,
        created_at   : (new Date()).toISOString(),
        updated_at   : (new Date()).toISOString()
      },
      {
        id           : 31,
        name         : 'Emergência',
        specialty_id : 5,
        created_at   : (new Date()).toISOString(),
        updated_at   : (new Date()).toISOString()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Beds', {
    where: {
      id: Array.from({ length: 31 }, (v, k) => k + 1)
    }
  }, {})
};

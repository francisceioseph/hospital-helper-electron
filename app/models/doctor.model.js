export class Doctor {
  constructor() {
    this.profile = {
      personal_datum: {
        skin_color  : 'branco',
        gender      : 'masculino',
        birth_datum : {
          country_of_birth : 'Brasil',
          state_of_birth   : 'Ceara',
          city_of_birth    : 'Aquiraz'
        }
      }
    };
  }

  static buildForAPI(values, doctor = {}) {
    const personal_datum = {
      ...doctor.profile.personal_datum,
      ...values.profile.personal_datum
    };

    return {
      id: doctor.id,
      personal_datum
    };
  }
}

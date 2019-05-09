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
      ...doctor.personal_datum,
      ...values.personal_datum,

      birth_datum: {
        ...doctor.personal_datum.birth_datum,
        ...values.personal_datum.birth_datum
      }
    };

    return {
      personal_datum,
      id                 : doctor.id,
      addresses          : [],
      telephones         : [],
      emails             : [],
      doctor_specialties : []
    };
  }
}

import t from 'typy';

export class Pacient {
  constructor(personalDatum = { bith_datum: {} }, demographics = {}, address = {}, familyDatum = {}) {
    const { birth_datum: birthDatum, ...otherPersonalDatum } = personalDatum;

    this.personal_datum = {
      skin_color  : 'branco',
      gender      : 'masculino',
      birth_datum : {
        country_of_birth : 'Brasil',
        state_of_birth   : 'Ceara',
        city_of_birth    : 'Aquiraz',
        ...birthDatum
      },
      ...otherPersonalDatum
    };

    this.demographic = {
      job_category       : 'assalariado_carteira',
      is_estudying       : false,
      sexual_orientation : 'none',
      gender_identity    : 'none',
      has_special_needs  : false,
      special_needs      : 'none',
      ...demographics
    };

    this.address = {
      zipcode      : '61700-000',
      neighborhood : '',
      city         : 'Aquiraz',
      state        : 'Ceará',
      ...address
    };

    this.family_datum = familyDatum || {
      mother_name    : '',
      father_name    : '',
      is_family_head : false,
      ...familyDatum
    };
  }

  static buildForAPI(values, pacient = {}) {
    const {
      phone, email, address, next_of_kin, ...others
    } = values;

    const personal_datum = {
      ...pacient.personal_datum,
      ...others.personal_datum
    };

    const emails = [
      {
        ...t(pacient, 'emails[0]').safeObject,
        ...email
      }
    ];

    const telephones = [
      {
        ...t(pacient, 'telephones[0]').safeObject,
        ...phone
      }
    ];

    const addresses = [
      {
        ...t(pacient, 'addresses[0]').safeObject,
        ...address
      }
    ];

    return {
      id: pacient.id,
      personal_datum,
      emails,
      telephones,
      addresses
    };
  }
}

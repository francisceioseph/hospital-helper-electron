import t from 'typy';
import moment from 'moment';

const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getRequiredDecorator(formKey, dataKey, decorator, values) {
  return decorator(formKey, {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : t(values, dataKey).safeObject
  });
}

function getOptionalDecorator(formKey, dataKey, decorator, values) {
  return decorator(formKey, {
    rules        : [],
    initialValue : t(values, dataKey).safeObject
  });
}

function getDateTimeRequiredDecorator(formKey, dataKey, decorator, values) {
  const initialValue = t(values, dataKey).safeObject;
  return decorator(formKey, {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : initialValue ? moment(initialValue) : null
  });
}

function getDateTimeOptionalDecorator(formKey, dataKey, decorator, values) {
  const initialValue = t(values, dataKey).safeObject;
  return decorator(formKey, {
    rules        : [],
    initialValue : initialValue ? moment(initialValue) : null
  });
}

export function getDecoratorManager(decorator, values) {
  return {
    fullNameDecorator    : getRequiredDecorator('personal_datum.full_name', 'personal_datum.full_name', decorator, values),
    rgDecorator          : getOptionalDecorator('personal_datum.rg', 'personal_datum.rg', decorator, values),
    cpfDecorator         : getOptionalDecorator('personal_datum.cpf', 'personal_datum.cpf', decorator, values),
    cnsDecorator         : getRequiredDecorator('personal_datum.cns', 'personal_datum.cns', decorator, values),
    genderDecorator      : getRequiredDecorator('personal_datum.gender', 'personal_datum.gender', decorator, values),
    nisNumberDecorator   : getOptionalDecorator('personal_datum.nis', 'personal_datum.nis', decorator, values),
    nationalityDecorator : getOptionalDecorator(
      'personal_datum.nationality',
      'personal_datum.nationality',
      decorator,
      values
    ),

    birthDateDecorator: getDateTimeRequiredDecorator(
      'personal_datum.birth_datum.date_of_birth',
      'personal_datum.birth_datum.date_of_birth',
      decorator,
      values
    ),
    countryBirthDecorator: getOptionalDecorator(
      'personal_datum.birth_datum.country_of_birth',
      'personal_datum.birth_datum.country_of_birth',
      decorator,
      values
    ),
    birthStateDecorator: getOptionalDecorator(
      'personal_datum.birth_datum.state_of_birth',
      'personal_datum.birth_datum.state_of_birth',
      decorator,
      values
    ),
    birthCityDecorator: getOptionalDecorator(
      'personal_datum.birth_datum.city_of_birth',
      'personal_datum.birth_datum.city_of_birth',
      decorator,
      values
    ),
    natDateDecorator: getDateTimeOptionalDecorator(
      'personal_datum.immigration_datum.nationalization_date',
      'personal_datum.immigration_datum.nationalization_date',
      decorator,
      values
    ),
    natPortDecorator: getDateTimeOptionalDecorator(
      'personal_datum.immigration_datum.oridinance_date',
      'personal_datum.immigration_datum.oridinance_date',
      decorator,
      values
    ),

    nextOfKinNameDecorator : getOptionalDecorator('next_of_kin.full_name', 'next_of_kin.full_name', decorator, values),
    nextOfKinCPFDecorator  : getOptionalDecorator('next_of_kin.cpf', 'next_of_kin.cpf', decorator, values),

    streetName   : getOptionalDecorator('address.street_name', 'address.street_name', decorator, values),
    houseNumber  : getOptionalDecorator('address.house_number', 'address.house_number', decorator, values),
    zipcode      : getOptionalDecorator('address.zipcode', 'address.zipcode', decorator, values),
    neighborhood : getOptionalDecorator('address.neighborhood', 'address.neighborhood', decorator, values),
    city         : getOptionalDecorator('address.city', 'address.city', decorator, values),
    state        : getOptionalDecorator('address.state', 'address.state', decorator, values),

    phoneDecorator : getOptionalDecorator('phone', 'phone', decorator, values),
    emailDecorator : getOptionalDecorator('email', 'email', decorator, values),

    motherNameDecorator: getRequiredDecorator(
      'family_datum.mother_name',
      'family_datum.mother_name',
      decorator,
      values
    ),
    familyHolderDecorator: getOptionalDecorator(
      'family_datum.family_holder',
      'family_datum.family_holder',
      decorator,
      values
    ),
    fatherNameDecorator: getOptionalDecorator('family_datum.father_name', 'family_datum.father_name', decorator, values)
  };
}

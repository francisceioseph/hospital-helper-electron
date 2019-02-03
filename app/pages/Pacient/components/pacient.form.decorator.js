import t from 'typy';

const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getRequiredDecorator(key, decorator, values) {
  const pacient = values || {};
  return decorator(key, {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : t(values, key).safeObject
  });
}

function getOptionalDecorator(key, decorator, values) {
  const pacient = values || {};
  return decorator(key, {
    rules        : [],
    initialValue : t(values, key).safeObject
  });
}

export function getDecoratorManager(decorator, values) {
  return {
    fullNameDecorator    : getRequiredDecorator('personal_datum_attributes.full_name', decorator, values),
    socialNameDecorator  : getOptionalDecorator('personal_datum_attributes.social_name', decorator, values),
    rgDecorator          : getRequiredDecorator('personal_datum_attributes.rg', decorator, values),
    cpfDecorator         : getRequiredDecorator('personal_datum_attributes.cpf', decorator, values),
    cnsDecorator         : getRequiredDecorator('personal_datum_attributes.cns', decorator, values),
    genderDecorator      : getRequiredDecorator('personal_datum_attributes.gender', decorator, values),
    skinColorDecorator   : getOptionalDecorator('personal_datum_attributes.skin_color', decorator, values),
    nisNumberDecorator   : getRequiredDecorator('personal_datum_attributes.nis', decorator, values),
    nationalityDecorator : getOptionalDecorator('personal_datum_attributes.nationality', decorator, values),

    birthDateDecorator    : getRequiredDecorator('personal_datum_attributes.birth_datum_attributes.date_of_birth', decorator, values),
    countryBirthDecorator : getOptionalDecorator('personal_datum_attributes.birth_datum_attributes.country_of_birth', decorator, values),
    birthStateDecorator   : getOptionalDecorator('personal_datum_attributes.birth_datum_attributes.state_of_birth', decorator, values),
    birthCityDecorator    : getOptionalDecorator('personal_datum_attributes.birth_datum_attributes.city_of_birth', decorator, values),
    natDateDecorator      : getOptionalDecorator('personal_datum_attributes.immigration_datum_attributes.nationalization_date', decorator, values),
    natPortDecorator      : getOptionalDecorator('personal_datum_attributes.immigration_datum_attributes.oridinance_date', decorator, values),

    nextOfKinNameDecorator : getOptionalDecorator('next_of_kin_attributes.full_name', decorator, values),
    nextOfKinCPFDecorator  : getOptionalDecorator('next_of_kin_attributes.cpf', decorator, values),

    jobTitle          : getOptionalDecorator('demographic_attributes.job_title', decorator, values),
    jobCategory       : getOptionalDecorator('demographic_attributes.job_category', decorator, values),
    isStuding         : getOptionalDecorator('demographic_attributes.is_estudying', decorator, values),
    degree            : getOptionalDecorator('demographic_attributes.degree', decorator, values),
    sexualOrientation : getOptionalDecorator('demographic_attributes.sexual_orientation', decorator, values),
    genderIndentity   : getOptionalDecorator('demographic_attributes.gender_identity', decorator, values),
    hasSpecialNeeds   : getOptionalDecorator('demographic_attributes.has_special_needs', decorator, values),
    specialNeeds      : getOptionalDecorator('demographic_attributes.special_needs', decorator, values),

    streetName   : getOptionalDecorator('address.street_name', decorator, values),
    houseNumber  : getOptionalDecorator('address.house_number', decorator, values),
    zipcode      : getOptionalDecorator('address.zipcode', decorator, values),
    neighborhood : getOptionalDecorator('address.neighborhood', decorator, values),
    city         : getOptionalDecorator('address.city', decorator, values),
    state        : getOptionalDecorator('address.state', decorator, values),

    phoneDecorator : getOptionalDecorator('phone', decorator, values),
    emailDecorator : getOptionalDecorator('email', decorator, values),

    motherNameDecorator   : getOptionalDecorator('family_datum_attributes.mother_name', decorator, values),
    familyHolderDecorator : getOptionalDecorator('family_datum_attributes.family_holder', decorator, values),
    fatherNameDecorator   : getOptionalDecorator('family_datum_attributes.father_name', decorator, values),
  };
}

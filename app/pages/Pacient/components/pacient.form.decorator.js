const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getRequiredDecorator(key, decorator, values) {
  const pacient = values.profile || {};
  return decorator(key, {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : pacient[key],
  });
}

function getOptionalDecorator(key, decorator, values) {
  const pacient = values.profile || {};
  return decorator(key, {
    rules        : [],
    initialValue : pacient[key],
  });
}

export function getDecoratorManager(decorator, values) {
  return {
    
    birthDateDecorator    : getRequiredDecorator('birth_datum_attributes.date_of_birth', decorator, values),
    countryBirthDecorator : getOptionalDecorator('birth_datum_attributes.country_birth', decorator, values),
    birthStateDecorator   : getOptionalDecorator('birth_datum_attributes.birth_state', decorator, values),
    birthCityDecorator    : getOptionalDecorator('birth_datum_attributes.birth_city', decorator, values),
    natDateDecorator      : getOptionalDecorator('birth_datum_attributes.nat_date', decorator, values),
    natPortDecorator      : getOptionalDecorator('birth_datum_attributes.nat_port', decorator, values),

    nextOfKinNameDecorator : getOptionalDecorator('next_of_kin_attributes.full_name', decorator, values),
    nextOfKinCPFDecorator  : getOptionalDecorator('next_of_kin_attributes.cpf', decorator, values),
    
    jobTitle    : getOptionalDecorator('demographics_attributes.job_title', decorator, values),
    jobCategory : getOptionalDecorator('demographics_attributes.job_category', decorator, values),
    isStuding   : getOptionalDecorator('demographics_attributes.is_estudying', decorator, values),
    degree      : getOptionalDecorator('demographics_attributes.degree', decorator, values),
    
    sexualOrientation : getOptionalDecorator('demographics_attributes.sexual_orientation', decorator, values),
    genderIndentity   : getOptionalDecorator('demographics_attributes.gender_identity', decorator, values),
    hasSpecialNeeds   : getOptionalDecorator('demographics_attributes.has_special_needs', decorator, values),
    specialNeeds      : getOptionalDecorator('demographics_attributes.special_needs', decorator, values),

    fullNameDecorator    : getRequiredDecorator('personal_datum_attributes.full_name', decorator, values),
    socialNameDecorator  : getOptionalDecorator('personal_datum_attributes.social_name', decorator, values),
    rgDecorator          : getRequiredDecorator('personal_datum_attributes.rg', decorator, values),
    cpfDecorator         : getRequiredDecorator('personal_datum_attributes.cpf', decorator, values),
    cnsDecorator         : getRequiredDecorator('personal_datum_attributes.cns', decorator, values),
    genderDecorator      : getRequiredDecorator('personal_datum_attributes.gender', decorator, values),
    skinColorDecorator   : getOptionalDecorator('personal_datum_attributes.skin_color', decorator, values),
    nisNumberDecorator   : getRequiredDecorator('personal_datum_attributes.nis_number', decorator, values),
    nationalityDecorator : getRequiredDecorator('personal_datum_attributes.nationality', decorator, values),

    streetName   : getOptionalDecorator('addresses_attributes.street_name', decorator, values),
    houseNumber  : getOptionalDecorator('addresses_attributes.house_number', decorator, values),
    zipcode      : getOptionalDecorator('addresses_attributes.zipcode', decorator, values),
    neighborhood : getOptionalDecorator('addresses_attributes.neighborhood', decorator, values),
    city         : getOptionalDecorator('addresses_attributes.city', decorator, values),
    state        : getOptionalDecorator('addresses_attributes.state', decorator, values),

    phoneDecorator : getRequiredDecorator('telephones_attributes.phone', decorator, values),
    emailDecorator : getRequiredDecorator('emails_attributes.email', decorator, values),

    motherNameDecorator   : getRequiredDecorator('family_datum_attributes.mother_name', decorator, values),
    familyHolderDecorator : getRequiredDecorator('family_datum_attributes.family_holder', decorator, values),
    fatherNameDecorator   : getOptionalDecorator('family_datum_attributes.father_name', decorator, values),
  };
}

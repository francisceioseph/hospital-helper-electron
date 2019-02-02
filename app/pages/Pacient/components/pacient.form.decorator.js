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
    fullNameDecorator    : getRequiredDecorator('personal_datum_attributes.full_name', decorator, values),
    socialNameDecorator  : getOptionalDecorator('personal_datum_attributes.social_name', decorator, values),
    rgDecorator          : getRequiredDecorator('personal_datum_attributes.rg', decorator, values),
    cpfDecorator         : getRequiredDecorator('personal_datum_attributes.cpf', decorator, values),
    cnsDecorator         : getRequiredDecorator('personal_datum_attributes.cns', decorator, values),
    genderDecorator      : getRequiredDecorator('personal_datum_attributes.gender', decorator, values),
    skinColorDecorator   : getOptionalDecorator('personal_datum_attributes.skin_color', decorator, values),
    nisNumberDecorator   : getRequiredDecorator('personal_datum_attributes.nis_number', decorator, values),
    nationalityDecorator : getRequiredDecorator('personal_datum_attributes.nationality', decorator, values),

    birthDateDecorator      : getRequiredDecorator('date_of_birth', decorator, values),
    cnsResponsavelDecorator : getRequiredDecorator('cns_responsavel', decorator, values),
    countryBirthDecorator   : getOptionalDecorator('country_birth', decorator, values),
    natDateDecorator        : getOptionalDecorator('nat_date', decorator, values),
    natPortDecorator        : getOptionalDecorator('nat_port', decorator, values),
    birthCityDecorator      : getRequiredDecorator('birth_city', decorator, values),
    birthStateDecorator     : getRequiredDecorator('birth_state', decorator, values),
    phoneDecorator          : getRequiredDecorator('phone', decorator, values),
    emailDecorator          : getRequiredDecorator('email', decorator, values),

    motherNameDecorator   : getRequiredDecorator('family_datum_attributes.mother_name', decorator, values),
    familyHolderDecorator : getRequiredDecorator('family_datum_attributes.family_holder', decorator, values),
    fatherNameDecorator   : getOptionalDecorator('family_datum_attributes.father_name', decorator, values),

    jobTitle            : getOptionalDecorator('job_title', decorator, values),
    jobCategory         : getOptionalDecorator('job_category', decorator, values),
    familyHolderKinship : getOptionalDecorator('family_holder_kinship', decorator, values),
    isStuding           : getOptionalDecorator('is_estudying', decorator, values),
    lastCourseAttended  : getOptionalDecorator('course', decorator, values),
    sexualOrientation   : getOptionalDecorator('sexual_orientation', decorator, values),
    genderIndentity     : getOptionalDecorator('gender_identity', decorator, values),
    hasSpecialNeeds     : getOptionalDecorator('has_special_needs', decorator, values),
    specialNeeds        : getOptionalDecorator('special_needs', decorator, values),
    rg                  : getOptionalDecorator('rg', decorator, values),

    streetName   : getOptionalDecorator('street_name', decorator, values),
    houseNumber  : getOptionalDecorator('house_number', decorator, values),
    zipcode      : getOptionalDecorator('zipcode', decorator, values),
    neighborhood : getOptionalDecorator('neighborhood', decorator, values),
    city         : getOptionalDecorator('city', decorator, values),
    state        : getOptionalDecorator('state', decorator, values),
  };
}

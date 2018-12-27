const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getFullNameDecorator(decorator, values) {
  const pacient = values.profile || {};
  return decorator('profile.full_name', {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : pacient.full_name
  });
}

function getCpfDecorator(decorator, values) {
  const pacient = values.profile || {};
  return decorator('profile.cpf', {
    rules        : [],
    initialValue : pacient.cpf
  });
}

function getCnsDecorator(decorator, values) {
  const pacient = values.profile || {};
  return decorator('profile.cns', {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : pacient.cns
  });
}

function getMotherNameDecorator(decorator, values) {
  const pacient = values.profile || {};
  return decorator('profile.mother_name', {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : pacient.mother_name
  });
}

function getGenderDecorator(decorator, values) {
  const pacient = values.profile || {};
  return decorator('profile.gender', {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : pacient.gender
  });
}
function getBirthDateDecorator(decorator, values) {
  const pacient = values.profile || {};
  return decorator('profile.date_of_birth', {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : pacient.date_of_birth
  });
}

function getRequiredDecorator(key, decorator, values) {
  const pacient = values.profile || {};
  return decorator(`profile.${key}`, {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : pacient[key],
  });
}

function getOptionalDecorator(key, decorator, values) {
  const pacient = values.profile || {};
  return decorator(`profile.${key}`, {
    rules        : [],
    initialValue : pacient[key],
  });
}

export function getDecoratorManager(decorator, values) {
  return {
    cpfDecorator            : getCpfDecorator(decorator, values),
    cnsDecorator            : getCnsDecorator(decorator, values),
    genderDecorator         : getGenderDecorator(decorator, values),
    birthDateDecorator      : getBirthDateDecorator(decorator, values),
    fullNameDecorator       : getFullNameDecorator(decorator, values),
    cnsResponsavelDecorator : getRequiredDecorator('cns_responsavel', decorator, values),
    familyHolderDecorator   : getRequiredDecorator('family_holder', decorator, values),
    socialNameDecorator     : getOptionalDecorator('social_name', decorator, values),
    skinColorDecorator      : getOptionalDecorator('skin_color', decorator, values),
    nisNumberDecorator      : getRequiredDecorator('nis_number', decorator, values),
    motherNameDecorator     : getMotherNameDecorator(decorator, values),
    fatherNameDecorator     : getOptionalDecorator('father_name', decorator, values),
    nationalityDecorator    : getRequiredDecorator('nationality', decorator, values),
    countryBirthDecorator   : getOptionalDecorator('country_birth', decorator, values),
    natDateDecorator        : getOptionalDecorator('nat_date', decorator, values),
    natPortDecorator        : getOptionalDecorator('nat_port', decorator, values),
    birthCityDecorator      : getRequiredDecorator('birth_city', decorator, values),
    birthStateDecorator     : getRequiredDecorator('birth_state', decorator, values),
    phoneDecorator          : getRequiredDecorator('phone', decorator, values),
    emailDecorator          : getRequiredDecorator('email', decorator, values),

    jobTitle            : getOptionalDecorator('job_title', decorator, values),
    jobCategory         : getOptionalDecorator('job_category', decorator, values),
    familyHolderKinship : getOptionalDecorator('family_holder_kinship', decorator, values),
    isStuding           : getOptionalDecorator('is_estudying', decorator, values),
    lastCourseAttended  : getOptionalDecorator('course', decorator, values),
    sexualOrientation   : getOptionalDecorator('sexual_orientation', decorator, values),
    genderIndentity     : getOptionalDecorator('gender_identity', decorator, values),
    hasSpecialNeeds     : getOptionalDecorator('has_special_needs', decorator, values),
    specialNeeds        : getOptionalDecorator('special_needs', decorator, values),
  };
}

const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getFullNameDecorator(decorator, values) {
  const pacient = values.pacient || {};
  return decorator('profile.full_name', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: pacient.full_name
  });
}

function getCpfDecorator(decorator, values) {
  const pacient = values.pacient || {};
  return decorator('profile.cpf', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: pacient.cpf
  });
}

function getCnsDecorator(decorator, values) {
  const pacient = values.pacient || {};
  return decorator('profile.cns', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: pacient.cns
  });
}

function getMotherNameDecorator(decorator, values) {
  const pacient = values.pacient || {};
  return decorator('profile.mother_name', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: pacient.mother_name
  });
}

function getGenderDecorator(decorator, values) {
  const pacient = values.pacient || {};
  return decorator('profile.gender', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: pacient.gender
  });
}
function getBirthDateDecorator(decorator, values) {
  const pacient = values.pacient || {};
  return decorator('profile.date_of_birth', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: pacient.date_of_birth
  });
}

export function getDecoratorManager(decorator, values) {
  return {
    fullNameDecorator: getFullNameDecorator(decorator, values),
    cpfDecorator: getCpfDecorator(decorator, values),
    cnsDecorator: getCnsDecorator(decorator, values),
    motherNameDecorator: getMotherNameDecorator(decorator, values),
    genderDecorator: getGenderDecorator(decorator, values),
    birthDateDecorator: getBirthDateDecorator(decorator, values)
  };
}

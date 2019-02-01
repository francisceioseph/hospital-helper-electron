const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getFullNameDecorator(decorator, values) {
  const profile = values.profile || {};
  return decorator('profile.full_name', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: profile.full_name
  });
}

function getCpfDecorator(decorator, values) {
  const profile = values.profile || {};
  return decorator('profile.cpf', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: profile.cpf
  });
}

function getGenderDecorator(decorator, values) {
  const profile = values.profile || {};
  return decorator('profile.gender', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: profile.gender
  });
}
function getBirthDateDecorator(decorator, values) {
  const profile = values.profile || {};
  return decorator('profile.date_of_birth', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: profile.date_of_birth
  });
}

function getCrmDecorator(decorator, values) {
  const profile = values.profile || {};
  return decorator('profile.crm', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: profile.crm
  });
}

function getEmailDecorator(decorator, values) {
  const user = values.user || {};
  return decorator('user.email', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: user.email
  });
}

function getPasswordDecorator(decorator, values) {
  const user = values.user || {};
  return decorator('user.password', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: user.password
  });
}

export function getDecoratorManager(decorator, values) {
  return {
    fullNameDecorator: getFullNameDecorator(decorator, values),
    cpfDecorator: getCpfDecorator(decorator, values),
    genderDecorator: getGenderDecorator(decorator, values),
    birthDateDecorator: getBirthDateDecorator(decorator, values),
    crmDecorator: getCrmDecorator(decorator, values),
    emailDecorator: getEmailDecorator(decorator, values),
    passwordDecorator: getPasswordDecorator(decorator, values)
  };
}

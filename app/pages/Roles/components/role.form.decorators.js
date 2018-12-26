const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getRoleNameDecorator(decorator, values) {
  const pacient = values.pacient || {};
  return decorator('user_role_name', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: pacient.user_role_name
  });
}

export function getDecoratorManager(decorator, values) {
  return {
    roleNameDecorator: getRoleNameDecorator(decorator, values)
  };
}

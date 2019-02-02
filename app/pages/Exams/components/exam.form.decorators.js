const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getPacientNameDecorator(decorator, values) {
  return decorator('id', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: values.id
  });
}

function getExamTypeDecorator(decorator, values) {
  return decorator('id', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: values.id
  });
}

function getDoctorNameDecorator(decorator, values) {
  return decorator('requester_id', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: values.requester_id
  });
}

function getScheduledDateDecorator(decorator, values) {
  return decorator('scheduled_to', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: values.scheduled_to
  });
}

export function getDecoratorManager(decorator, values) {
  return {
    pacientNameDecorator: getPacientNameDecorator(decorator, values),
    examTypeDecorator: getExamTypeDecorator(decorator, values),
    doctorNameDecorator: getDoctorNameDecorator(decorator, values),
    scheduledDateDecorator: getScheduledDateDecorator(decorator, values)
  };
}

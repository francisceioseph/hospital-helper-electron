const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getPacientNameDecorator(decorator, values) {
  return decorator('id', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: values.id
  });
}

function getAppointmentTypeDecorator(decorator, values) {
  return decorator('id', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: values.id
  });
}

function getDoctorNameDecorator(decorator, values) {
  return decorator('id', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: values.id
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
    appointmentTypeDecorator: getAppointmentTypeDecorator(decorator, values),
    doctorNameDecorator: getDoctorNameDecorator(decorator, values),
    scheduledDateDecorator: getScheduledDateDecorator(decorator, values)
  };
}

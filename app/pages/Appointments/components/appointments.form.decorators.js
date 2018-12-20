const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getPacientNameDecorator(decorator, values) {
  return decorator('pacient_id', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: values.pacient_id
  });
}

function getAppointmentTypeDecorator(decorator, values) {
  return decorator('appointment_type_id', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: values.appointment_type_id
  });
}

function getDoctorNameDecorator(decorator, values) {
  return decorator('doctor_id', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: values.doctor_id
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

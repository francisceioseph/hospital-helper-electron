const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getPacientNameDecorator(decorator, values) {
  return decorator('pacient_id', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: values.pacient_id
  });
}

function getExamTypeDecorator(decorator, values) {
  return decorator('exam_type_id', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue: values.exam_type_id
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
    examTypeDecorator: getExamTypeDecorator(decorator, values),
    doctorNameDecorator: getDoctorNameDecorator(decorator, values),
    scheduledDateDecorator: getScheduledDateDecorator(decorator, values)
  };
}

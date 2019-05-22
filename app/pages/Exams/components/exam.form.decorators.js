import moment from 'moment';
import t from 'typy';

const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getPacientNameDecorator(decorator, values) {
  return decorator('pacient_id', {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : t(values, 'pacient.id').safeObject
  });
}

function getExamTypeDecorator(decorator, values) {
  return decorator('exam_type_id', {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : t(values, 'exam_type.id').safeObject
  });
}

function getDoctorNameDecorator(decorator, values) {
  return decorator('doctor_id', {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : t(values, 'doctor.id').safeObject
  });
}

function getScheduledDateDecorator(decorator, values) {
  const initialValue = values.scheduled_to ? moment(values.scheduled_to) : null;
  return decorator('scheduled_to', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue
  });
}

export function getDecoratorManager(decorator, values) {
  return {
    pacientNameDecorator   : getPacientNameDecorator(decorator, values),
    examTypeDecorator      : getExamTypeDecorator(decorator, values),
    doctorNameDecorator    : getDoctorNameDecorator(decorator, values),
    scheduledDateDecorator : getScheduledDateDecorator(decorator, values)
  };
}

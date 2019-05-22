import t from 'typy';
import moment from 'moment';

const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getPacientNameDecorator(decorator, values) {
  return decorator('pacient_id', {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : t(values, 'pacient.id').safeObject
  });
}

function getAppointmentTypeDecorator(decorator, values) {
  return decorator('appointment_type_id', {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : t(values, 'appointment_type.id').safeObject
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

function getDiagnosticHypotesisDecorator(decorator, values) {
  return decorator('diagnostic_hypotesis', {
    rules        : [],
    initialValue : values.diagnostic_hypotesis
  });
}

export function getDecoratorManager(decorator, values) {
  return {
    pacientNameDecorator         : getPacientNameDecorator(decorator, values),
    appointmentTypeDecorator     : getAppointmentTypeDecorator(decorator, values),
    doctorNameDecorator          : getDoctorNameDecorator(decorator, values),
    scheduledDateDecorator       : getScheduledDateDecorator(decorator, values),
    diagnosticHypotesisDecorator : getDiagnosticHypotesisDecorator(decorator, values)
  };
}

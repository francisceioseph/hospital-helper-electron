import t from 'typy';
import moment from 'moment';

const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

export function getRequiredDecorator(path, decorator, values) {
  return decorator(path, {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : t(values, path).safeObject
  });
}

export function getOptionalDecorator(path, decorator, values) {
  return decorator(path, {
    rules        : [],
    initialValue : t(values, path).safeObject
  });
}

export function getDateTimeRequiredDecorator(path, decorator, values) {
  const initialValue = t(values, path).safeObject;
  return decorator(path, {
    rules        : [{ required: true, message: REQUIRED_FIELD_MSG }],
    initialValue : initialValue ? moment(initialValue) : null
  });
}

export function getDateTimeOptionalDecorator(path, decorator, values) {
  const initialValue = t(values, path).safeObject;
  return decorator(path, {
    rules        : [],
    initialValue : initialValue ? moment(initialValue) : null
  });
}

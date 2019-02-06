import moment from 'moment';
import { SIMPLE_DATE_FORMAT_PT_BR } from '../components/forms';

export const dateFormat = date => moment(date).format(SIMPLE_DATE_FORMAT_PT_BR);

export const calculateAge = (birthdate) => {
  const now = moment();
  const birth = moment(birthdate);

  return now.diff(birth, 'years');
};

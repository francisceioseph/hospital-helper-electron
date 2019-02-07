import moment from 'moment';

export const DATE_FORMAT_PT_BR = 'DD/MM/YYYY HH:mm';
export const SIMPLE_DATE_FORMAT_PT_BR = 'DD/MM/YYYY';
export const TIME_FORMAT_PT_BR = 'HH:mm';

export const TEXT_DATE_FORMAT_PT_BR = 'DD [de] MMMM[,] YYYY';

export const dateFormat = date => moment(date).format(SIMPLE_DATE_FORMAT_PT_BR);

export const calculateAge = (birthdate) => {
  const now = moment();
  const birth = moment(birthdate);

  return now.diff(birth, 'years');
};

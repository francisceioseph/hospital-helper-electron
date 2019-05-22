import React from 'react';
import moment from 'moment';

import { DatePicker, TimePicker } from 'antd';
import SugestSelector from '../../../components/forms/SugestSelector';
import { SIMPLE_DATE_FORMAT_PT_BR, TIME_FORMAT_PT_BR } from '../../../utils/date-format';

export const getPacientNameField = pacients => (
  <SugestSelector options={pacients} valueName="id" labelName="personal_datum.full_name" idName="id" />
);

export const examTypeField = appointmentTypes => (
  <SugestSelector options={appointmentTypes} valueName="id" labelName="exam_type_name" idName="id" />
);

export const getDoctorNameField = doctors => (
  <SugestSelector options={doctors} valueName="id" labelName="personal_datum.full_name" idName="id" />
);

const disabledDate = (slotValue) => {
  const today = moment();
  const slotDate = moment(slotValue);
  return slotDate.isBefore(today, 'days');
};

export const getScheduledDateField = () => (
  <DatePicker showTime disabledDate={disabledDate} format={SIMPLE_DATE_FORMAT_PT_BR} />
);
export const getScheduledTimeField = () => <TimePicker showToday format={TIME_FORMAT_PT_BR} minuteStep={15} />;

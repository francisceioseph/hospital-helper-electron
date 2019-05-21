// @flow

import * as React from 'react';
import { DatePicker, TimePicker,Input } from 'antd';

import SugestSelector from '../../../components/forms/SugestSelector';
import { SIMPLE_DATE_FORMAT_PT_BR, TIME_FORMAT_PT_BR } from '../../../utils/date-format';

const { TextArea } = Input;

export const getDiagnosticHypotesisField = () => <TextArea rows={7}></TextArea>

export const getPacientNameField = pacients => (
  <SugestSelector
    style={{ width: '100%' }}
    options={pacients}
    valueName="id"
    labelName="personal_datum.full_name"
    idName="id"
  />
);

export const getAppointmentTypeField = appointmentTypes => (
  <SugestSelector options={appointmentTypes} valueName="id" labelName="appointment_type_name" idName="id" />
);

export const getDoctorNameField = doctors => (
  <SugestSelector options={doctors} valueName="id" labelName="personal_datum.full_name" idName="id" />
);

export const getScheduledDateField = () => <DatePicker showToday format={SIMPLE_DATE_FORMAT_PT_BR} />;
export const getScheduledTimeField = () => <TimePicker showToday format={TIME_FORMAT_PT_BR} minuteStep={15} />;

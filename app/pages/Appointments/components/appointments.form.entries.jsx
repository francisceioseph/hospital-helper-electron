import React from 'react';
import { DatePicker } from 'antd';
import SugestSelector from '../../../components/forms/SugestSelector';
import { DATE_FORMAT_PT_BR } from '../../../utils/date-format';

export const getPacientNameField = pacients => (
  <SugestSelector options={pacients} valueName="id" labelName="personal_datum.full_name" idName="id" />
);

export const getAppointmentTypeField = appointmentTypes => (
  <SugestSelector options={appointmentTypes} valueName="id" labelName="appointment_type_name" idName="id" />
);

export const getDoctorNameField = doctors => (
  <SugestSelector options={doctors} valueName="id" labelName="personal_datum.full_name" idName="id" />
);

export const getScheduledDateField = () => <DatePicker showTime showToday format={DATE_FORMAT_PT_BR} />;

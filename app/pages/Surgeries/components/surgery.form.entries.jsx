import React from 'react';
import { DatePicker } from 'antd';
import SugestSelector from '../../../components/forms/SugestSelector';
import { DATE_FORMAT_PT_BR } from '../../../components/forms/formConstants';

export const getPacientNameField = pacients => (
  <SugestSelector
    options={pacients}
    valueName="id"
    labelName="personal_datum.full_name"
    idName="id"
  />
);

export const surgeryTypeField = appointmentTypes => (
  <SugestSelector
    options={appointmentTypes}
    valueName="id"
    labelName="surgery_type_name"
    idName="id"
  />
);

export const getDoctorNameField = doctors => (
  <SugestSelector
    options={doctors}
    valueName="id"
    labelName="personal_datum.full_name"
    idName="id"
  />
);

export const getScheduledDateField = () => (
  <DatePicker showTime={true} showToday={true} format={DATE_FORMAT_PT_BR} />
);

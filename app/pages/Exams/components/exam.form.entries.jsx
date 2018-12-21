import React from 'react';
import { DatePicker } from 'antd';
import SugestSelector from '../../../components/forms/SugestSelector';
import { DATE_FORMAT_PT_BR } from '../../../components/forms/formConstants';
export const getPacientNameField = pacients => (
  <SugestSelector
    options={pacients}
    valueName="user_profile_id"
    labelName="full_name"
    idName="user_profile_id"
  />
);

export const examTypeField = appointmentTypes => (
  <SugestSelector
    options={appointmentTypes}
    valueName="exam_type_id"
    labelName="exam_type_name"
    idName="exam_type_id"
  />
);

export const getDoctorNameField = doctors => (
  <SugestSelector
    options={doctors}
    valueName="user_profile_id"
    labelName="full_name"
    idName="user_profile_id"
  />
);

export const getScheduledDateField = () => (
  <DatePicker showTime={true} showToday={true} format={DATE_FORMAT_PT_BR} />
);

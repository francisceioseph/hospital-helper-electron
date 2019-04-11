import React from 'react';
import { Input, DatePicker, Select } from 'antd';

import { SIMPLE_DATE_FORMAT_PT_BR } from '../../../utils/date-format';

export const getFullNameField = () => <Input />;
export const getCpfField = () => <Input />;
export const getCrmField = () => <Input />;
export const getEmailField = () => <Input />;
export const getPasswordField = () => <Input type="password" />;
export const getGenderField = () => (
  <Select>
    <Select.Option value="male">Masculino</Select.Option>
    <Select.Option value="famale">Feminino</Select.Option>
  </Select>
);
export const getBirthDateField = () => <DatePicker showToday format={SIMPLE_DATE_FORMAT_PT_BR} />;

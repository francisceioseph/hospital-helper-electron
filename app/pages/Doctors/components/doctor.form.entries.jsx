import React from 'react';
import { Input, DatePicker, Select } from 'antd';

import {} from './doctor.form.constants';

export const getFullNameField = () => <Input />;
export const getCpfField = () => <Input />;
export const getCrmField = () => <Input />;
export const getEmailField = () => <Input />;
export const getPasswordField = () => <Input type="password" />;
export const getGenderField = () => (
  <Select>
    <Select.Option value="male">Masculino</Select.Option>
    <Select.Option value="famale">Feminino</Select.Option>
    <Select.Option value="none">Não Informado</Select.Option>
  </Select>
);
export const getBirthDateField = () => <DatePicker showToday={true} />;

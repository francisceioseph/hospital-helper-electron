import React from 'react';
import { Input, DatePicker, Select } from 'antd';

import {} from './pacient.form.constants';

export const getFullNameField = () => <Input />;
export const getCpfField = () => <Input />;
export const getCnsField = () => <Input />;
export const getMotherNameField = () => <Input />;
export const getGenderField = () => (
  <Select>
    <Select.Option value="male">Masculino</Select.Option>
    <Select.Option value="famale">Feminino</Select.Option>
    <Select.Option value="none">Não Informado</Select.Option>
  </Select>
);
export const getBirthDateField = () => <DatePicker showToday={true} />;

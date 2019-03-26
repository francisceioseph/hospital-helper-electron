import React from 'react';
import { Link } from 'react-router-dom';
import { DatePicker, TimePicker, Input, Row, Col, Button } from 'antd';
import SugestSelector from '../../../components/forms/SugestSelector';
import { SIMPLE_DATE_FORMAT_PT_BR, TIME_FORMAT_PT_BR } from '../../../utils/date-format';

const InputGroup = Input.Group;

export const getPacientNameField = pacients => (
  <InputGroup>
    <Row gutter={8}>
      <Col span={15}>
        <SugestSelector style={{width: '100%'}} options={pacients} valueName="id" labelName="personal_datum.full_name" idName="id" />
      </Col>
      <Col span={6}>
        <Button>
          <Link to="/usuarios/pacientes/novo">Cadastrar Paciente</Link>
        </Button>
      </Col>
    </Row>
  </InputGroup>
);

export const getAppointmentTypeField = appointmentTypes => (
  <SugestSelector options={appointmentTypes} valueName="id" labelName="appointment_type_name" idName="id" />
);

export const getDoctorNameField = doctors => (
  <SugestSelector options={doctors} valueName="id" labelName="personal_datum.full_name" idName="id" />
);

export const getScheduledDateField = () => <DatePicker showToday format={SIMPLE_DATE_FORMAT_PT_BR} />;
export const getScheduledTimeField = () => <TimePicker showToday format={TIME_FORMAT_PT_BR} minuteStep={15} />;

/* eslint-disable no-undef */
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { List } from 'antd';
import { DATE_FORMAT_PT_BR } from '../forms';

import './detail.component.less';

const { Item } = List;

const AppointmentInfo = ({ appointment }) => (
  <List size="small" bordered>
    <Item>
      <Item.Meta title="Paciente" />
      <b>{appointment.full_name}</b>
    </Item>
    <Item>
      <Item.Meta title="Médico Responsável" />
      <b>{appointment.doctor_name}</b>
    </Item>
    <Item>
      <Item.Meta title="Tipo de Atendimento" />
      <b>{appointment.appointment_type_name}</b>
    </Item>
    <Item>
      <Item.Meta title="Horário Marcado" />
      <b>{moment(appointment.scheduled_to).format(DATE_FORMAT_PT_BR)}</b>
    </Item>
  </List>
);

AppointmentInfo.propTypes = {
  appointment: PropTypes.instanceOf(Object).isRequired
};

export default AppointmentInfo;

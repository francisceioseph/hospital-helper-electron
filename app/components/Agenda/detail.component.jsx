/* eslint-disable no-undef */
import React from 'react';
import { List } from 'antd';
import moment from 'moment';
import { DATE_FORMAT_PT_BR } from '../forms';
const Item = List.Item;

const AppointmentInfo = ({ appointment }) => {
  return (
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
};

export default AppointmentInfo;

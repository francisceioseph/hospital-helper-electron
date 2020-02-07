import React from 'react';
import { Button, Modal } from 'antd';

import { store } from '../../../store';
import { selectAppointmentType, removeAppointmentType, showAppointmentTypeModal } from '../appointment-types.actions';

const ButtonGroup = Button.Group;

const handleOnDeleteClick = record => Modal.confirm({
  title   : 'Remover Tipo de Agendamento',
  content : 'Você realmente deseja remover este Tipo de Agendamento?',
  onOk    : () => {
    store.dispatch(removeAppointmentType(record.id));
  }
});

const handleOnEditClick = (record) => {
  store.dispatch(selectAppointmentType(record.id));
  store.dispatch(showAppointmentTypeModal());
};

export const tableColumns = [
  {
    title     : 'Tipos de Agendamento',
    dataIndex : 'appointment_type_name',
    key       : 'appointment_type_name'
  },
  {
    title  : 'Ações',
    key    : 'actions',
    render : (text, record) => (
      <ButtonGroup>
        <Button
          icon="edit"
          onClick={() => {
            handleOnEditClick(record);
          }}
        />
      </ButtonGroup>
    )
  }
];

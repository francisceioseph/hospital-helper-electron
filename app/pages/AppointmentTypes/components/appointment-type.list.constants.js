import React from 'react';
import { Button, Modal } from 'antd';

import { store } from '../../../store';
import { removeAppointmentType } from '../appointment-types.actions';

const ButtonGroup = Button.Group;

export const tableColumns = [
  {
    title: 'Tipos de Agendamento',
    dataIndex: 'appointment_type_name',
    key: 'appointment_type_name',
  },
  {
    title: 'Ações',
    key: 'actions',
    render: (text, record) => (
      <ButtonGroup>
        <Button icon="edit" onClick={() => {}} />
        <Button
          icon="delete"
          onClick={() => Modal.confirm({
            title: 'Remover Tipo de Agendamento',
            content: 'Você realmente deseja remover este Tipo de Agendamento?',
            onOk: () => {
              store.dispatch(removeAppointmentType(record.appointment_type_id));
            },
          })
          }
        />
      </ButtonGroup>
    ),
  },
];

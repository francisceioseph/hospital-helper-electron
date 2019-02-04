import React from 'react';
import { Button, Modal } from 'antd';

import { store } from '../../../store';
import { removeSurgeryType } from '../surgery-types.actions';

const ButtonGroup = Button.Group;

export const tableColumns = [
  {
    title: 'Tipos de Cirurgia',
    dataIndex: 'surgery_type_name',
    key: 'surgery_type_name',
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
            title: 'Remover Tipo de Cirurgia',
            content: 'Você realmente deseja remover este Tipo de Cirurgia?',
            onOk: () => {
              store.dispatch(removeSurgeryType(record.id));
            },
          })
          }
        />
      </ButtonGroup>
    ),
  },
];

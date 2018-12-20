import React from 'react';
import { Button, Modal } from 'antd';

import { store } from '../../../store/configureStore';
import { removeDoctor } from '../doctors.actions';

const ButtonGroup = Button.Group;

export const tableColumns = [
  {
    title: 'Nome',
    dataIndex: 'full_name',
    key: 'full_name'
  },
  {
    title: 'CRM',
    dataIndex: 'crm',
    key: 'crm'
  },
  {
    title: 'Especialidade',
    dataIndex: 'especialty',
    key: 'especialty'
  },
  {
    title: 'Ações',
    key: 'actions',
    render: (text, record) => (
      <ButtonGroup>
        <Button icon="edit" onClick={() => {}} />
        <Button
          icon="delete"
          onClick={() =>
            Modal.confirm({
              title: 'Remover Perfil',
              content: 'Você realmente deseja remover esse perfil?',
              onOk: () => {
                store.dispatch(removeDoctor(record.id));
              }
            })
          }
        />
      </ButtonGroup>
    )
  }
];

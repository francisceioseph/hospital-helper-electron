import React from 'react';
import { Button, Modal } from 'antd';

import { store } from '../../../store';
import { removeRole } from '../roles.actions';

const ButtonGroup = Button.Group;

export const tableColumns = [
  {
    title: 'Nome',
    dataIndex: 'user_role_name',
    key: 'user_role_name',
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
            title: 'Remover Perfil',
            content: 'Você realmente deseja remover esse perfil?',
            onOk: () => {
              store.dispatch(removeRole(record.user_role_id));
            },
          })
          }
        />
      </ButtonGroup>
    ),
  },
];

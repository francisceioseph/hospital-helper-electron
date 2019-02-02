import React from 'react';
import { Button, Modal } from 'antd';

import { store } from '../../../store';
import { removeSpecialty } from '../specialty.actions';

const ButtonGroup = Button.Group;

export const tableColumns = [
  {
    title     : 'Especialidade',
    dataIndex : 'specialty_name',
    key       : 'specialty_name'
  },
  {
    title  : 'Ações',
    key    : 'actions',
    render : (text, record) => (
      <ButtonGroup>
        <Button icon="edit" onClick={() => {}} />
        <Button
          icon="delete"
          onClick={() => Modal.confirm({
              title   : 'Remover Especialidade',
              content : 'Você realmente deseja remover esta especialidade?',
              onOk    : () => {
                store.dispatch(removeSpecialty(record.id));
              }
            })
          }
        />
      </ButtonGroup>
    )
  }
];

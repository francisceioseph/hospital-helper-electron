import React from 'react';
import { Button, Modal } from 'antd';

import moment from 'moment';
import { store } from '../../store';
import { removePacient } from './pacient.actions';

const ButtonGroup = Button.Group;

export const tableColumns = [
  {
    title: 'Nome',
    dataIndex: 'full_name',
    key: 'full_name'
  },
  {
    title: 'CPF',
    dataIndex: 'cpf',
    key: 'cpf'
  },
  {
    title: 'CNS',
    dataIndex: 'cns',
    key: 'cns'
  },
  {
    title: 'Data Nasc.',
    dataIndex: 'date_of_birth',
    key: 'date_of_birth',
    render: text => moment(text).format('L')
  },
  {
    title: 'Ações',
    key: 'actions',
    render: (text, record) => (
      <ButtonGroup>
        <Button icon="edit" onClick={() => console.log('Editing...')} />
        <Button
          icon="delete"
          onClick={() =>
            Modal.confirm({
              title: 'Remover Pacient',
              content: 'Você realmente deseja remover esse paciente?',
              onOk: () => {
                store.dispatch(removePacient(record.id));
              }
            })
          }
        />
      </ButtonGroup>
    )
  }
];

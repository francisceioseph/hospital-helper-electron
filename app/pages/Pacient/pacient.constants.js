import React from 'react';

import { Button, Modal } from 'antd';

import { store } from '../../store';
import { dateFormat } from '../../utils';
import { removePacient } from './pacient.actions';

const ButtonGroup = Button.Group;

export const tableColumns = [
  {
    title     : 'Nome',
    dataIndex : 'personal_datum.full_name',
    key       : 'full_name'
  },
  {
    title     : 'CNS',
    dataIndex : 'personal_datum.cns',
    key       : 'cns'
  },
  {
    title     : 'Nome da Mãe',
    dataIndex : 'personal_datum.family_datum.mother_name',
    key       : 'mother_name'
  },
  {
    title     : 'Data Nasc.',
    dataIndex : 'personal_datum.birth_datum.date_of_birth',
    key       : 'date_of_birth',
    render    : text => dateFormat(text)
  },
  {
    title     : 'Município',
    dataIndex : 'personal_datum.addresses[0].city',
    key       : 'current_city'
  },
  {
    title  : 'Ações',
    key    : 'actions',
    render : (text, record) => (
      <ButtonGroup>
        <Button icon="edit" onClick={() => console.log('Editing...')} />
        <Button
          icon="delete"
          onClick={() => Modal.confirm({
            title   : 'Remover Pacient',
            content : 'Você realmente deseja remover esse paciente?',
            onOk    : () => {
              store.dispatch(removePacient(record.id));
            }
          })
          }
        />
      </ButtonGroup>
    )
  }
];

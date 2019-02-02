import React from 'react';
import { Button, Modal, Tag } from 'antd';

import { store } from '../../../store';
import { removeDoctor } from '../doctors.actions';

const ButtonGroup = Button.Group;

export const tableColumns = [
  {
    title     : 'Nome',
    dataIndex : 'personal_datum.full_name',
    key       : 'full_name'
  },
  {
    title     : 'CRM',
    dataIndex : 'personal_datum.crm',
    key       : 'crm'
  },
  {
    title     : 'Especialidade',
    dataIndex : 'especialties',
    key       : 'especialties',
    render    : specialties => (
      <span>
        {specialties.map((specialty) => {
          return <Tag color="geekblue" key={specialty.id}>{specialty.specialty_name}</Tag>;
        })}
      </span>
    ),
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
            title   : 'Remover Perfil',
            content : 'Você realmente deseja remover esse perfil?',
            onOk    : () => {
              store.dispatch(removeDoctor(record.id));
            }
          })
          }
        />
      </ButtonGroup>
    )
  }
];

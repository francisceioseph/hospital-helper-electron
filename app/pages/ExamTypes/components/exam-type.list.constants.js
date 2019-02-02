import React from 'react';
import { Button, Modal } from 'antd';

import { store } from '../../../store';
import { removeExamType } from '../exam-types.actions';

const ButtonGroup = Button.Group;

export const tableColumns = [
  {
    title: 'Tipos de Agendamento',
    dataIndex: 'exam_type_name',
    key: 'exam_type_name',
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
              store.dispatch(removeExamType(record.id));
            },
          })
          }
        />
      </ButtonGroup>
    ),
  },
];

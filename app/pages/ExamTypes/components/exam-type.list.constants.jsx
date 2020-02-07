import React from 'react';
import { Button, Modal } from 'antd';

import { store } from '../../../store';
import { removeExamType, selectExamType, showExamTypeModal } from '../exam-types.actions';

const ButtonGroup = Button.Group;

const handleOnDeleteClick = record => Modal.confirm({
  title   : 'Remover Tipo de Exame',
  content : 'Você realmente deseja remover este Tipo de Exame?',
  onOk    : () => {
    store.dispatch(removeExamType(record.id));
  }
});

const handleOnEditClick = (record) => {
  store.dispatch(selectExamType(record.id));
  store.dispatch(showExamTypeModal());
};

export const tableColumns = [
  {
    title     : 'Tipos de Exame',
    dataIndex : 'exam_type_name',
    key       : 'exam_type_name'
  },
  {
    title  : 'Ações',
    key    : 'actions',
    render : (text, record) => (
      <ButtonGroup>
        <Button icon="edit" onClick={() => handleOnEditClick(record)} />
      </ButtonGroup>
    )
  }
];

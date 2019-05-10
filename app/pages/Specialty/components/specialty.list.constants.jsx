import React from 'react';
import { Button, Modal } from 'antd';

import { store } from '../../../store';
import { removeSpecialty, selectSpecialty, showSpecialtyModal } from '../specialty.actions';

const ButtonGroup = Button.Group;

const handleOnDeleteClick = record => Modal.confirm({
  title   : 'Remover Especialidade',
  content : 'Você realmente deseja remover esta Especialidade?',
  onOk    : () => {
    store.dispatch(removeSpecialty(record.id));
  }
});

const handleOnEditClick = (record) => {
  store.dispatch(selectSpecialty(record.id));
  store.dispatch(showSpecialtyModal());
};

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
        <Button icon="edit" onClick={() => handleOnEditClick(record)} />
        <Button icon="delete" onClick={() => handleOnDeleteClick(record)} />
      </ButtonGroup>
    )
  }
];

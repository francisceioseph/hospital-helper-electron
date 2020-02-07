import React from 'react';
import { Button, Modal } from 'antd';

import { store } from '../../../store';
import { removeSurgeryType, selectSurgeryType, showSurgeryTypeModal } from '../surgery-types.actions';

const ButtonGroup = Button.Group;

const handleOnDeleteClick = record => Modal.confirm({
  title   : 'Remover Tipo de Surgerye',
  content : 'Você realmente deseja remover este Tipo de Surgerye?',
  onOk    : () => {
    store.dispatch(removeSurgeryType(record.id));
  }
});

const handleOnEditClick = (record) => {
  store.dispatch(selectSurgeryType(record.id));
  store.dispatch(showSurgeryTypeModal());
};

export const tableColumns = [
  {
    title     : 'Tipos de Cirurgia',
    dataIndex : 'surgery_type_name',
    key       : 'surgery_type_name'
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

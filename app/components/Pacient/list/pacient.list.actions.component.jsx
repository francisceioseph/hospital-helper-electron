// @flow

import * as React from 'react';
import { Button, Modal } from 'antd';

const ButtonGroup = Button.Group;

type Props = {
  removePacient: Function,
  selectPacient: Function,
  showEditModal: Function,
  record: Object
};

export const PacientListActionsComponent = (props: Props) => {
  const {
    removePacient, selectPacient, showEditModal, record
  } = props;
  return (
    <ButtonGroup>
      <Button
        icon="edit"
        onClick={() => {
          selectPacient(record.id);
          showEditModal();
        }}
      />
      <Button
        icon="delete"
        onClick={() => Modal.confirm({
          title   : 'Remover Pacient',
          content : 'Você realmente deseja remover esse paciente?',
          onOk    : () => {
            removePacient(record.id);
          }
        })
        }
      />
    </ButtonGroup>
  );
};

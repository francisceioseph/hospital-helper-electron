// @flow

import * as React from 'react';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

type Props = {
  selectPacient: Function,
  showEditModal: Function,
  record: Object
};

export const PacientListActionsComponent = (props: Props) => {
  const {
    selectPacient, showEditModal, record
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
    </ButtonGroup>
  );
};

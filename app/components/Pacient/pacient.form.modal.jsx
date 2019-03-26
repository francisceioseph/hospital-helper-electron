import React from 'react';

import { withState, compose } from 'recompose';
import { Modal } from  'antd';

import { PacientFormComponent } from '../../pages/Pacient/components'

class AddPacientModalComponent extends React.Component {
  closeModal = () => {
    this.props.setVisible(false);
  };

  render() {
    return <Modal
        visible={this.props.visible}
        title="Cadastrar Novo Paciente"
        okText="Cadastrar"
        closable={true}
        confirmLoading={this.props.confirmLoading}
        onOk={() => {}}
        onCancel={this.closeModal}
        width="90%"
      >
      <PacientFormComponent showSubmit={false} />
    </Modal>
  }
};

const withVisible = withState('visible', 'setVisible', true);

export const AddPacientModal = compose(
  withVisible,
)(AddPacientModalComponent);
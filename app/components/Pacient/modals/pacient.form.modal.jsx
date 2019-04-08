// @flow
import * as React from 'react';
import { Modal, Form } from 'antd';

import { PacientFormComponent } from '../form';

type Props = {
  visible: boolean,
  onCancel: Function,
  onCreate: Function,
  handleSubmit: Function,
  pacient: Object,
  form: Object
};

const PacientModal = (props: Props) => (
  <Modal
    visible={props.visible}
    title="Cadastrar Paciente"
    okText="Cadastrar"
    onCancel={props.onCancel}
    onOk={props.onCreate}
    style={{ top: '20px' }}
    width="80vw"
    centered
    destroyOnClose
    maskClosable={false}
  >
    <PacientFormComponent
      showSubmit={false}
      handleSubmit={props.handleSubmit}
      pacient={props.pacient}
      form={props.form}
    />
  </Modal>
);

export default Form.create()(PacientModal);

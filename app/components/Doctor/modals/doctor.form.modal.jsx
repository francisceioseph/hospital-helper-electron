// @flow
import * as React from 'react';
import { Modal, Form } from 'antd';

import { DoctorFormComponent } from '../form';

type Props = {
  titleText?: string,
  visible: boolean,
  onCancel: Function,
  onCreate: Function,
  handleSubmit: Function,
  pacient: Object,
  form: Object
};

const DoctorModal = (props: Props) => (
  <Modal
    visible={props.visible}
    title={props.titleText}
    okText="Salvar"
    onCancel={props.onCancel}
    onOk={props.onCreate}
    style={{ top: '20px' }}
    width="80vw"
    centered
    destroyOnClose
    maskClosable={false}
  >
    <DoctorFormComponent
      showSubmit={false}
      handleSubmit={props.handleSubmit}
      pacient={props.pacient}
      form={props.form}
    />
  </Modal>
);

DoctorModal.defaultProps = {
  titleText: 'Cadastrar Médico'
};

export default Form.create()(DoctorModal);

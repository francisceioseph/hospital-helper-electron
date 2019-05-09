// @flow
import * as React from 'react';
import { Modal, Form } from 'antd';

import { EditDoctorFormComponent } from '../form';

type Props = {
  titleText?: string,
  visible: boolean,
  onCancel: Function,
  onCreate: Function,
  handleSubmit: Function,
  doctor: Object,
  form: Object,
  mode: String
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
    <EditDoctorFormComponent
      mode={props.mode}
      showSubmit={false}
      handleSubmit={props.handleSubmit}
      doctor={props.doctor}
      form={props.form}
    />
  </Modal>
);

DoctorModal.defaultProps = {
  titleText: 'Cadastrar Médico'
};

export default Form.create()(DoctorModal);

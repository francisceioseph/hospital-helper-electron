/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

class AppointmentTypeModalForm extends React.Component {
  render() {
    const {
      visible, onCancel, onCreate, confirmLoading, form,
    } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="Adicionar Tipo de Agendamento"
        okText="Adicionar"
        onCancel={onCancel}
        closable={false}
        confirmLoading={confirmLoading}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="Nome da Tipo de Agendamento">
            {getFieldDecorator('appointment_type_name', {
              rules: [{ required: true, message: 'Campo obrigatório' }],
            })(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

AppointmentTypeModalForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  confirmLoading: PropTypes.bool.isRequired,
  form: PropTypes.instanceOf(Object).isRequired,
};

export default Form.create()(AppointmentTypeModalForm);

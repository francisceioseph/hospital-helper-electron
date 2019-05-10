/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

// eslint-disable-next-line react/prefer-stateless-function
class SurgeryTypeModalForm extends React.Component {
  render() {
    const {
      visible, onCancel, onCreate, confirmLoading, form, surgeryType
    } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="Adicionar Tipo de Cirurgia"
        okText="Finalizar"
        onCancel={onCancel}
        closable={false}
        confirmLoading={confirmLoading}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="Nome da Tipo de Cirurgia">
            {getFieldDecorator('surgery_type_name', {
              rules        : [{ required: true, message: 'Campo obrigatório' }],
              initialValue : surgeryType.surgery_type_name
            })(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

SurgeryTypeModalForm.propTypes = {
  visible        : PropTypes.bool.isRequired,
  onCancel       : PropTypes.func.isRequired,
  onCreate       : PropTypes.func.isRequired,
  confirmLoading : PropTypes.bool.isRequired,
  form           : PropTypes.instanceOf(Object).isRequired,
  surgeryType    : PropTypes.instanceOf(Object).isRequired
};

export default Form.create()(SurgeryTypeModalForm);

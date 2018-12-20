/* eslint-disable no-undef */
import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

class SpecialtyModalForm extends React.Component {
  render() {
    const { visible, onCancel, onCreate, confirmLoading, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="Adicionar Especialidade"
        okText="Adicionar"
        onCancel={onCancel}
        closable={false}
        confirmLoading={confirmLoading}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="Nome da Especialidade">
            {getFieldDecorator('specialty_name', {
              rules: [{ required: true, message: 'Campo obrigatório' }]
            })(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(SpecialtyModalForm);

/* eslint-disable no-undef */
import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;
type Props = {
  visible: boolean,
  confirmLoading: boolean,
  onCancel: Function,
  onCreate: Function,
  form: Object,
  specialty: Object
};

// eslint-disable-next-line react/prefer-stateless-function
class SpecialtyModalForm extends React.Component<Props> {
  render() {
    const {
      visible, onCancel, onCreate, confirmLoading, form, specialty
    } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="Adicionar Especialidade"
        okText="Finalizar"
        onCancel={onCancel}
        closable={false}
        confirmLoading={confirmLoading}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="Nome da Especialidade">
            {getFieldDecorator('specialty_name', {
              rules        : [{ required: true, message: 'Campo obrigatório' }],
              initialValue : specialty.specialty_name
            })(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(SpecialtyModalForm);

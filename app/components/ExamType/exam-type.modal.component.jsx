// @flow

import * as React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

type Props = {
  visible: boolean,
  confirmLoading: boolean,
  onCancel: Function,
  onCreate: Function,
  form: Object,
  examType: Object
};

// eslint-disable-next-line react/prefer-stateless-function
class ExamTypeModalForm extends React.Component<Props> {
  render() {
    const {
      visible, onCancel, onCreate, confirmLoading, form, examType
    } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="Adicionar Tipo de Exame"
        okText="Finalizar"
        onCancel={onCancel}
        closable={false}
        confirmLoading={confirmLoading}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="Nome do Tipo de Exame">
            {getFieldDecorator('exam_type_name', {
              rules        : [{ required: true, message: 'Campo obrigatório' }],
              initialValue : examType.exam_type_name
            })(<Input />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}
export default Form.create()(ExamTypeModalForm);

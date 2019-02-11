// @flow

import * as React from 'react';
import { Form, Input, Button } from 'antd';

import * as WebAPI from '../../../../utils/api.service';

type Props = {
  conversationId: number,
  user: Object,
  form: Object
};

type State = {};

class NewMessageForm extends React.Component<Props, State> {
  state = {};

  handleSubmit = (e) => {
    const { form, conversationId, user } = this.props;

    e.preventDefault();

    form.validateFields((err, values) => {
      if (!err) {
        const message = {
          user_id         : user.id,
          conversation_id : conversationId,
          content         : values.content
        };

        WebAPI.postMessage(message)
          .then(() => {
            form.resetFields();
          })
          .catch(err => console.log(error));
      }
    });
  };

  render = () => {
    const { form } = this.props;

    const { getFieldDecorator } = form;
    const contentDecorator = getFieldDecorator('content', {
      rules: [{ required: true, message: 'Digite uma mensagem' }]
    });

    return (
      <div className="new-message-form">
        <Form className="message-form" layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item className="message-form-item">{contentDecorator(<Input />)}</Form.Item>
          <Form.Item>
            <Button htmlType="submit">Enviar</Button>
          </Form.Item>
        </Form>
      </div>
    );
  };
}

const FormWrapper = Form.create({ name: 'message-form' })(NewMessageForm);

export default FormWrapper;

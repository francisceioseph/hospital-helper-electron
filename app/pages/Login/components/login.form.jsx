import React from 'react';
import {
  Form, Icon, Input, Button, Checkbox
} from 'antd';
import { compose, withHandlers } from 'recompose';

const FormItem = Form.Item;

const handleSubmit = props => (e) => {
  e.preventDefault();
  props.form.validateFields((err, values) => {
    if (!err) {
      props.onSubmitHandler(values);
    }
  });
};

const withFormHandlers = withHandlers({ handleSubmit });

const LoginForm = (props) => {
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={props.handleSubmit} className="login-form">
      <FormItem label="E-mail">
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Email é obrigatório' }]
        })(<Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="E-mail" />)}
      </FormItem>
      <FormItem label="Senha">
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Senha é obrigatória' }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Senha"
          />
        )}
      </FormItem>

      <Button type="primary" htmlType="submit" className="login-form-button">
        Entrar
      </Button>
    </Form>
  );
};

const LoginFormComponent = compose(withFormHandlers)(LoginForm);

export default Form.create()(LoginFormComponent);

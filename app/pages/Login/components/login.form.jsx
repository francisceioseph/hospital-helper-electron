import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { compose, withHandlers } from 'recompose';

const FormItem = Form.Item;

const handleSubmit = props => e => {
  e.preventDefault();
  props.form.validateFields((err, values) => {
    if (!err) {
      props.onSubmitHandler(values);
    }
  });
};

const withFormHandlers = withHandlers({ handleSubmit });

const LoginForm = props => {
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={props.handleSubmit} className="login-form">
      <FormItem>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true
        })(<Checkbox>Remember me</Checkbox>)}
      </FormItem>

      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
    </Form>
  );
};

const LoginFormComponent = compose(withFormHandlers)(LoginForm);

export default Form.create()(LoginFormComponent);

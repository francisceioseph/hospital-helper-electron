// @flow
import * as React from 'react';
import { Form } from 'antd';

import { PacientFormComponent } from '../../../components/Pacient/form';

type Props = {
  pacient: Object,
  form: Object,
  onSubmitHandler: Function
};

class PacientForm extends React.Component<Props> {
  handleSubmit = (e) => {
    const { form, onSubmitHandler } = this.props;

    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        onSubmitHandler(values, form);
      }
    });
  };

  render() {
    const { pacient, form } = this.props;

    return <PacientFormComponent showSubmit handleSubmit={this.handleSubmit} pacient={pacient} form={form} />;
  }
}

PacientForm.defaultProps = {
  showSubmit: true
};

export default Form.create()(PacientForm);

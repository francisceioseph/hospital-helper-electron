// @flow
import * as React from 'react';

import { Form, Button } from 'antd';
import { compose, withHandlers, defaultProps } from 'recompose';

import { PacientFormComponent } from '../../../components/Pacient/form';

class PacientForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmitHandler(values, props.form);
      }
    });
  };

  render() {
    const { pacient, form, handleSubmit } = this.props;

    return (
      <PacientFormComponent
        showSubmit
        handleSubmit={handleSubmit}
        pacient={pacient}
        form={form}
      />
    );
  };

}

PacientForm.defaultProps = {
  showSubmit: true
}

export default Form.create()(PacientForm);

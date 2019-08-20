// @flow
import * as React from 'react';

import { Form } from 'antd';
import { DoctorFormComponent as DoctorForm } from '../../../components/Doctor';

type Props = {
  doctor: Object,
  form: Object,
  onSubmitHandler: Function
};

class DoctorFormComponent extends React.Component<Props> {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmitHandler(values, this.props.form);
      }
    });
  };

  render() {
    const { doctor, form } = this.props;

    return (
      <div>
        <DoctorForm showSubmit={this.props.showSubmit} handleSubmit={this.handleSubmit} doctor={doctor} form={form} mode="new" />
      </div>
    );
  }
}

DoctorFormComponent.defaultProps = {
  showSubmit: true
};

export default Form.create()(DoctorFormComponent);

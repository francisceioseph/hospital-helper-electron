import React from 'react';

import { Form, Button, Divider } from 'antd';
import { compose, withHandlers, defaultProps } from 'recompose';

import {
  HORIZONTAL_FORM_LAYOUT,
  FORM_ITEM_LAYOUT,
  FORM_ITEM_SUBMIT_LAYOUT
} from '../../../components/forms';

import { getDecoratorManager } from './appointments.form.decorators';
import { LABELS } from './appointments.form.constants';

import {
  getPacientNameField,
  getAppointmentTypeField,
  getDoctorNameField,
  getScheduledDateField
} from './appointments.form.entries';

const FormItem = Form.Item;

const handleSubmit = props => e => {
  e.preventDefault();
  props.form.validateFields((err, values) => {
    if (!err) {
      props.onSubmitHandler(values, props.form);
    }
  });
};

const withFormHandlers = withHandlers({ handleSubmit });

const AppointmentForm = props => {
  const { appointment } = props;
  const { getFieldDecorator } = props.form;
  const decoratorManager = getDecoratorManager(getFieldDecorator, appointment);

  return (
    <div>
      <Divider orientation="left">
        <h2>Agendar Consulta</h2>
      </Divider>
      <Form onSubmit={props.handleSubmit} layout={HORIZONTAL_FORM_LAYOUT}>
        <FormItem label={LABELS.PACIENT_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.pacientNameDecorator(
            getPacientNameField(props.pacients)
          )}
        </FormItem>

        <FormItem
          label={LABELS.APPOINTMENT_TYPES}
          {...FORM_ITEM_LAYOUT}
          hasFeedback
        >
          {decoratorManager.appointmentTypeDecorator(
            getAppointmentTypeField(props.appointmentTypes)
          )}
        </FormItem>

        <FormItem label={LABELS.DOCTOR_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.doctorNameDecorator(
            getDoctorNameField(props.doctors)
          )}
        </FormItem>

        <FormItem
          label={LABELS.SCHEDULED_DATE}
          {...FORM_ITEM_LAYOUT}
          hasFeedback
        >
          {decoratorManager.scheduledDateDecorator(getScheduledDateField())}
        </FormItem>

        <FormItem {...FORM_ITEM_SUBMIT_LAYOUT}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Cadastrar
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

const AppointmentFormComponent = compose(
  defaultProps({
    appointment: {},
    appointmentTypes: [],
    pacients: [],
    doctors: []
  }),
  withFormHandlers
)(AppointmentForm);

export default Form.create()(AppointmentFormComponent);

import React from 'react';

import {
  Form, Button, Row, Col
} from 'antd';
import {
  compose, withState, withHandlers, defaultProps
} from 'recompose';

import { HORIZONTAL_FORM_LAYOUT, FORM_ITEM_LAYOUT, FORM_ITEM_SUBMIT_LAYOUT } from '../../../components/forms';
import { PacientModalFormContainer } from '../../../containers/Pacient';

import { getDecoratorManager } from './appointments.form.decorators';
import { LABELS } from './appointments.form.constants';

import {
  getPacientNameField,
  getAppointmentTypeField,
  getDoctorNameField,
  getScheduledDateField,
  getScheduledTimeField
} from './appointments.form.entries';

const FormItem = Form.Item;

const withModalVisible = withState('modalVisible', 'setModalVisible', false);

const handleSubmit = props => (e) => {
  e.preventDefault();
  props.form.validateFields((err, values) => {
    if (!err) {
      props.onSubmitHandler(values, props.form);
    }
  });
};

const showNewPacientModal = props => () => {
  props.setModalVisible(true);
};

const hideNewPacientModal = props => () => {
  props.setModalVisible(false);
};

const withFormHandlers = withHandlers({ handleSubmit, showNewPacientModal, hideNewPacientModal });

const AppointmentForm = (props) => {
  const { appointment } = props;
  const { getFieldDecorator } = props.form;
  const decoratorManager = getDecoratorManager(getFieldDecorator, appointment);

  return (
    <div>
      <Form onSubmit={props.handleSubmit} layout={HORIZONTAL_FORM_LAYOUT}>
        <FormItem label={LABELS.PACIENT_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
          <Row gutter={8}>
            <Col span={18}>{decoratorManager.pacientNameDecorator(getPacientNameField(props.pacients))}</Col>
            <Col span={4}>
              <Button onClick={props.showNewPacientModal}> Cadastrar Paciente </Button>
            </Col>
          </Row>
        </FormItem>

        <PacientModalFormContainer
          visible={props.modalVisible}
          onCancel={props.hideNewPacientModal}
          onSubmitSuccess={props.hideNewPacientModal}
        />

        <FormItem label={LABELS.APPOINTMENT_TYPES} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.appointmentTypeDecorator(getAppointmentTypeField(props.appointmentTypes))}
        </FormItem>

        <FormItem label={LABELS.DOCTOR_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.doctorNameDecorator(getDoctorNameField(props.doctors))}
        </FormItem>

        <FormItem label={LABELS.SCHEDULED_DATE} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.scheduledDateDecorator(getScheduledDateField())}
        </FormItem>

        <FormItem label={LABELS.SCHEDULED_TIME} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.scheduledDateDecorator(getScheduledTimeField())}
        </FormItem>

        <FormItem {...FORM_ITEM_SUBMIT_LAYOUT}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Cadastrar
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

const AppointmentFormComponent = compose(
  withModalVisible,
  defaultProps({
    appointment      : {},
    appointmentTypes : [],
    pacients         : [],
    doctors          : []
  }),
  withFormHandlers
)(AppointmentForm);

export default Form.create()(AppointmentFormComponent);

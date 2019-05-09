import React from 'react';

import {
  Form, Button, Row, Col
} from 'antd';
import {
  compose, withHandlers, defaultProps, withState
} from 'recompose';

import { HORIZONTAL_FORM_LAYOUT, FORM_ITEM_LAYOUT, FORM_ITEM_SUBMIT_LAYOUT } from '../../../components/forms';
import { PacientModalFormContainer } from '../../../containers/Pacient';
import { getDecoratorManager } from './surgery.form.decorators';
import { LABELS } from './surgery.form.constants';

import {
  getPacientNameField,
  getDoctorNameField,
  getScheduledDateField,
  surgeryTypeField,
  getScheduledTimeField
} from './surgery.form.entries';

const FormItem = Form.Item;

const withModalVisible = withState('modalVisible', 'setModalVisible', false);

const showNewPacientModal = props => () => {
  props.setModalVisible(true);
};

const hideNewPacientModal = props => () => {
  props.setModalVisible(false);
};

const handleSubmit = props => (e) => {
  e.preventDefault();
  props.form.validateFields((err, values) => {
    if (!err) {
      props.onSubmitHandler(values, props.form);
    }
  });
};

const withFormHandlers = withHandlers({ handleSubmit, showNewPacientModal, hideNewPacientModal });

const SurgeryForm = (props) => {
  const { surgery, form } = props;
  const { getFieldDecorator } = form;
  const decoratorManager = getDecoratorManager(getFieldDecorator, surgery);

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

        <FormItem label={LABELS.SURGERY_TYPE} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.surgeryTypeDecorator(surgeryTypeField(props.surgeryTypes))}
        </FormItem>

        <FormItem label={LABELS.DOCTOR_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.doctorNameDecorator(getDoctorNameField(props.doctors))}
        </FormItem>

        <FormItem label={LABELS.SCHEDULED_DATE} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.scheduledDateDecorator(getScheduledDateField())}
        </FormItem>

        <FormItem label={LABELS.SCHEDULED_DATE} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.scheduledDateDecorator(getScheduledTimeField())}
        </FormItem>

        <FormItem {...FORM_ITEM_SUBMIT_LAYOUT}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Salvar
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

const SurgeryFormComponent = compose(
  withModalVisible,
  defaultProps({
    surgery: {}
  }),
  withFormHandlers
)(SurgeryForm);

export default Form.create()(SurgeryFormComponent);

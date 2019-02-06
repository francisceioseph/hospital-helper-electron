import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Button } from 'antd';
import { compose, withHandlers, defaultProps } from 'recompose';

import { HORIZONTAL_FORM_LAYOUT, FORM_ITEM_LAYOUT, FORM_ITEM_SUBMIT_LAYOUT } from '../../../components/forms';

import { getDecoratorManager } from './exam.form.decorators';
import { LABELS } from './exam.form.constants';

import {
  getPacientNameField, getDoctorNameField, getScheduledDateField, examTypeField
} from './exam.form.entries';

const FormItem = Form.Item;

const handleSubmit = props => (e) => {
  e.preventDefault();
  props.form.validateFields((err, values) => {
    if (!err) {
      props.onSubmitHandler(values, props.form);
    }
  });
};

const withFormHandlers = withHandlers({ handleSubmit });

const ExamForm = (props) => {
  const { exam } = props;
  const { getFieldDecorator } = props.form;
  const decoratorManager = getDecoratorManager(getFieldDecorator, exam);

  return (
    <div>
      <Form onSubmit={props.handleSubmit} layout={HORIZONTAL_FORM_LAYOUT}>
        <FormItem label={LABELS.PACIENT_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.pacientNameDecorator(getPacientNameField(props.pacients))}
          <Link to="/usuarios/pacientes/novo">Cadastrar Paciente</Link>
        </FormItem>

        <FormItem label={LABELS.EXAM_TYPE} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.examTypeDecorator(examTypeField(props.examTypes))}
        </FormItem>

        <FormItem label={LABELS.DOCTOR_NAME} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.doctorNameDecorator(getDoctorNameField(props.doctors))}
        </FormItem>

        <FormItem label={LABELS.SCHEDULED_DATE} {...FORM_ITEM_LAYOUT} hasFeedback>
          {decoratorManager.scheduledDateDecorator(getScheduledDateField())}
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

const ExamFormComponent = compose(
  defaultProps({
    exam: {}
  }),
  withFormHandlers
)(ExamForm);

export default Form.create()(ExamFormComponent);
